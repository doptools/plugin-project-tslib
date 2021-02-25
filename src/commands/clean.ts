import { CliCommand, Shell } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';
@CliCommand({
  description: 'Clean the project build cache'
})
export default class CleanProjectCommand extends Command {

  async run(): Promise<void> {
    Shell.exec(`yarn clean`);
  }

}
