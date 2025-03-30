import { Rule, apply, template, mergeWith, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematicsDialog(options: any): Rule {
  return () => {
    if (!options.className) {
      options.className = strings.classify(options.name) + 'DialogComponent';
    }

    const sourceTemplates = apply(url('./files'), [
      template({
        ...options,
        classify: strings.classify,
      }),
    ]);

    return mergeWith(sourceTemplates);
  };
}
