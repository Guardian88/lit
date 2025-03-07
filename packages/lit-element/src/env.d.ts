/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// eslint-disable-next-line no-var
declare var litElementHydrateSupport:
  | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((options: {LitElement: any}) => void);
// eslint-disable-next-line no-var
declare var litElementPlatformSupport:
  | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((options: {LitElement: any}) => void);
// eslint-disable-next-line no-var
declare var litElementVersions: undefined | Array<string>;
// eslint-disable-next-line no-var
declare var litIssuedWarnings: undefined | Set<string | undefined>;
