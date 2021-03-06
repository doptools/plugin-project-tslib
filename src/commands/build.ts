import { CliCommand, Shell } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';
@CliCommand({
  description: 'Build the project'
})
export default class BuildProjectCommand extends Command {

  async run(): Promise<void> {
    Shell.exec(`yarn build`);
  }

}
