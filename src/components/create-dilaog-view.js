import React, {useState} from 'react';
import { Modal} from '@material-ui/core';

function CreateDialogView(oProps) { 

    const handleOnSubmit = (oEvent)=>{
        
    }

  return (
    <div className="createDialogView">
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={oProps.showCreateDialog}
        onClose={oProps.handleOnClose}>
        <div>

        </div>
      </Modal>
    </div>
  );
}

export default CreateDialogView;
