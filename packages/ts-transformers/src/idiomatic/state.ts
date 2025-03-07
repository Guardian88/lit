/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as ts from 'typescript';
import {PropertyVisitor} from './property.js';

/**
 * Transform:
 *
 *   @state()
 *   foo
 *
 * Into:
 *
 *   static get properties() {
 *     return {
 *       foo: {state: true}
 *     }
 *   }
 */
export class StateVisitor extends PropertyVisitor {
  readonly kind = 'memberDecorator';
  readonly decoratorName = 'state';

  protected _augmentOptions(
    options: ts.ObjectLiteralExpression
  ): ts.ObjectLiteralExpression {
    const f = this._factory;
    return f.createObjectLiteralExpression([
      ...(options !== undefined
        ? options.properties.filter((option) => {
            const name =
              option.name !== undefined && ts.isIdentifier(option.name)
                ? option.name.text
                : undefined;
            return name !== 'state';
          })
        : []),
      f.createPropertyAssignment(f.createIdentifier('state'), f.createTrue()),
    ]);
  }
}
