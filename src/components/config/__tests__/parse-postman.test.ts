/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import { expect } from 'chai'
import { Config } from '../../../interfaces/config.js'
import { parseConfigFromPostman } from '../parser/postman.js'
import fs from 'fs'

const basicCollectionV20 = fs.readFileSync(
  'src/components/config/__tests__/mock_files/basic-postman_collection-v2.0.json',
  'utf8'
)
const basicCollectionV21 = fs.readFileSync(
  'src/components/config/__tests__/mock_files/basic-postman_collection-v2.1.json',
  'utf8'
)
const groupedCollectionV20 = fs.readFileSync(
  'src/components/config/__tests__/mock_files/grouped-postman_collection-v2.0.json',
  'utf8'
)
const groupedCollectionV21 = fs.readFileSync(
  'src/components/config/__tests__/mock_files/grouped-postman_collection-v2.1.json',
  'utf8'
)
const unsupportedCollection = fs.readFileSync(
  'src/components/config/__tests__/mock_files/postman_collection-unsupported.json',
  'utf8'
)

describe('parseConfigFromPostman', () => {
  it('throws invalid JSON format', () => {
    try {
      parseConfigFromPostman('../fetch.ts')
    } catch (error: unknown) {
      expect(() => {
        throw error
      }).to.throw('Your Postman file contains an invalid JSON format!')
    }
  })

  it('throws unsupported collection version', () => {
    try {
      const collectionStr = unsupportedCollection

      parseConfigFromPostman(collectionStr)
    } catch (error: unknown) {
      expect(() => {
        throw error
      }).to.throw(
        'Your Postman collection version is not supported. Please use v2.0 or v2.1!'
      )
    }
  })

  describe('basic Postman collection', () => {
    it('[v2.0] - should converted to Monika config', () => {
      const collectionStr = basicCollectionV20
      const collectionJson = JSON.parse(collectionStr)
      const config: Config = parseConfigFromPostman(collectionStr)

      expect(config.probes.length).to.equals(5)

      for (const [index, item] of collectionJson.item.entries()) {
        expect(item.name).to.equals(config.probes[index].name)

        for (const req of config.probes[index].requests || []) {
          const mode = item.request.body?.mode
          const language = item.request.body?.options?.raw?.language

          expect(req.url).to.equals(item.request.url)
          expect(req.method).to.equals(item.request.method)

          if (
            mode === 'formdata' ||
            mode === 'urlencoded' ||
            (mode === 'raw' && language === 'json')
          ) {
            expect(req.body).to.deep.equals({ message: 'Hello, world!' })
          }

          const headers = req.headers || {}
          if (mode === 'formdata' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals('multipart/form-data')
          }

          if (mode === 'urlencoded' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals(
              'application/x-www-form-urlencoded'
            )
          }

          if (mode === 'raw') {
            if (language === 'json' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('application/json')
            }

            if (language === 'text' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('text/plain')
            }
          }
        }
      }
    })

    it('[v2.1] - should converted to Monika config', () => {
      const collectionStr = basicCollectionV21
      const collectionJson = JSON.parse(collectionStr)
      const config: Config = parseConfigFromPostman(collectionStr)

      expect(config.probes.length).to.equals(5)

      for (const [index, item] of collectionJson.item.entries()) {
        expect(item.name).to.equals(config.probes[index].name)

        for (const req of config.probes[index].requests || []) {
          const mode = item.request.body?.mode
          const language = item.request.body?.options?.raw?.language

          expect(req.url).to.equals(item.request.url.raw)
          expect(req.method).to.equals(item.request.method)

          if (
            mode === 'formdata' ||
            mode === 'urlencoded' ||
            (mode === 'raw' && language === 'json')
          ) {
            expect(req.body).to.deep.equals({ message: 'Hello, world!' })
          }

          const headers = req.headers || {}
          if (mode === 'formdata' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals('multipart/form-data')
          }

          if (mode === 'urlencoded' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals(
              'application/x-www-form-urlencoded'
            )
          }

          if (mode === 'raw') {
            if (language === 'json' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('application/json')
            }

            if (language === 'text' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('text/plain')
            }
          }
        }
      }
    })
  })

  describe('grouped Postman collection', () => {
    it('[v2.0] - should converted to Monika config', () => {
      const collectionStr = groupedCollectionV20
      const collectionJson = JSON.parse(collectionStr)
      const config: Config = parseConfigFromPostman(collectionStr)

      expect(config.probes.length).to.equals(2)

      for (const [index, item] of collectionJson.item.entries()) {
        expect(item.name).to.equals(config.probes[index].name)

        for (const [rIndex, req] of (
          config.probes[index].requests || []
        ).entries()) {
          const mode = item.item[rIndex].request.body?.mode
          const language =
            item.item[rIndex].request.body?.options?.raw?.language

          expect(req.url).to.equals(item.item[rIndex].request.url)
          expect(req.method).to.equals(item.item[rIndex].request.method)

          if (
            mode === 'formdata' ||
            mode === 'urlencoded' ||
            (mode === 'raw' && language === 'json')
          ) {
            expect(req.body).to.deep.equals({ message: 'Hello, world!' })
          }

          const headers = req.headers || {}
          if (mode === 'formdata' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals('multipart/form-data')
          }

          if (mode === 'urlencoded' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals(
              'application/x-www-form-urlencoded'
            )
          }

          if (mode === 'raw') {
            if (language === 'json' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('application/json')
            }

            if (language === 'text' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('text/plain')
            }
          }
        }
      }
    })

    it('[v2.1] - should converted to Monika config', () => {
      const collectionStr = groupedCollectionV21
      const collectionJson = JSON.parse(collectionStr)
      const config: Config = parseConfigFromPostman(collectionStr)

      expect(config.probes.length).to.equals(2)

      for (const [index, item] of collectionJson.item.entries()) {
        expect(item.name).to.equals(config.probes[index].name)

        for (const [rIndex, req] of (
          config.probes[index].requests || []
        ).entries()) {
          const mode = item.item[rIndex].request.body?.mode
          const language =
            item.item[rIndex].request.body?.options?.raw?.language

          expect(req.url).to.equals(item.item[rIndex].request.url?.raw)
          expect(req.method).to.equals(item.item[rIndex].request.method)

          if (
            mode === 'formdata' ||
            mode === 'urlencoded' ||
            (mode === 'raw' && language === 'json')
          ) {
            expect(req.body).to.deep.equals({ message: 'Hello, world!' })
          }

          const headers = req.headers || {}
          if (mode === 'formdata' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals('multipart/form-data')
          }

          if (mode === 'urlencoded' && 'Content-Type' in headers) {
            expect(headers['Content-Type']).to.equals(
              'application/x-www-form-urlencoded'
            )
          }

          if (mode === 'raw') {
            if (language === 'json' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('application/json')
            }

            if (language === 'text' && 'Content-Type' in headers) {
              expect(headers['Content-Type']).to.equals('text/plain')
            }
          }
        }
      }
    })
  })
})
