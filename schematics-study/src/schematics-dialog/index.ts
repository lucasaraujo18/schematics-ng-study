import { Rule, apply, template, mergeWith, url, move } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematicsDialog(options: any): Rule {
  return () => {
    const targetPath = options.path;

    const sourceTemplates = apply(url('./files'), [
      template({
        ...strings,
        ...options,
      }),
      
      move(targetPath)
    ]);

    return mergeWith(sourceTemplates);
  };
}
