import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import "./model.module.css";

export interface ModelInterface extends DialogProps {
  modelHeader: boolean;
  modelFooter: boolean;
  onSubmit: VoidFunction;
}

const ModelMail = styled(Dialog)({});

const Model: React.FC<ModelInterface> = ({
  children,
  ...props
}: ModelInterface) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = () => {
    setOpen(false);
    props.onSubmit();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Preview Notice
      </Button>
      <ModelMail
        maxWidth="lg"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="custom-dialog"
      >
        {props.modelHeader ? (
          <DialogTitle id="alert-dialog-title">
            {props.title}
            <Button
              style={{ float: "right" }}
              onClick={handleClose}
              data-testid="close"
            >
              <CloseIcon />
            </Button>
          </DialogTitle>
        ) : (
          ""
        )}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        {props.modelFooter ? (
          <DialogActions>
            <Button onClick={submit} autoFocus data-testid="submit">
              Submit Notice
            </Button>
          </DialogActions>
        ) : (
          ""
        )}
      </ModelMail>
    </div>
  );
};

export default Model;
