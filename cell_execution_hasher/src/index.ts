import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  
  import {
    INotebookTracker,
    Notebook,
    NotebookPanel
  } from '@jupyterlab/notebook';
  
  import {
    // IOutputArea,
    OutputArea
  } from '@jupyterlab/outputarea';
  
  /**
   * Plugin to log cell outputs to console
   */
  const plugin: JupyterFrontEndPlugin<void> = {
    id: 'cell-output-logger:plugin',
    description: 'Logs cell outputs to console',
    autoStart: true,
    requires: [INotebookTracker],
    activate: (
      app: JupyterFrontEnd,
      notebookTracker: INotebookTracker
    ) => {
      console.log('Cell Output Logger Extension is activated!');
  
      // Function to handle new output
    //   const handleOutput = (outputArea: OutputArea, output: any) => {
    //     console.log('Cell Output:', output);
    //   };
  
      // Watch for notebook changes
      notebookTracker.widgetAdded.connect((sender: INotebookTracker, panel: NotebookPanel) => {
        // Watch for cell outputs
        panel.content.activeCellChanged.connect((_sender: Notebook, cell: any) => {
            console.log("hasdfi")
          if (cell) {
            const outputArea: OutputArea = cell.outputArea;
            
            // Subscribe to future outputs
            outputArea.model.changed.connect((sender: any) => {
              const outputs: any[] = outputArea.model.toJSON();
              console.log('Cell Execution Output:', outputs);
            });
          }
        });
      });
    }
  };
  
  export default plugin;