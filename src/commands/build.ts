import { CliCommand, Shell } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';
@CliCommand({
  description: 'Generate a new typescipt library project'
})
export default class NewTslibProjectCommand extends Command {

  async run(): Promise<void> {
    Shell.exec(`yarn run build`);
  }

}
