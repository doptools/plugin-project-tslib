import { CliCommand, Shell } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';
@CliCommand({
  description: 'Check project for code issues'
})
export default class CheckProjectCommand extends Command {

  async run(): Promise<void> {
    Shell.exec(`yarn run check`);
  }

}
