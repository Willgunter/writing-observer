import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the cell_execution_hasher extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'cell_execution_hasher:plugin',
  description: 'A JupyterLab extension which hashes cell output',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension cell_execution_hasher is activated!');
  }
};

export default plugin;
