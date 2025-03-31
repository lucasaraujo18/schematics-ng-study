import { Rule, apply, template, mergeWith, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematicsDialog(options: any): Rule {
  return () => {
    const sourceTemplates = apply(url('./files'), [
      template({
        ...strings,
        ...options,
      }),
    ]);

    return mergeWith(sourceTemplates);
  };
}
