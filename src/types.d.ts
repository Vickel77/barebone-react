


interface ButtonProps {
  type?: ButtonType;
  label:string | ReactNode;
}

type ButtonType = "primary" | "outlined" | "text"

type  TableColumn = {
  title: string | ReactNode;
  dataIndex: string;
  render?: (dataIndex?:string, record?:any) => ReactNode
  key?:string | number
}[]

type PillTypes = "success" | "error" | "info"

interface PillProps {
  type:PillTypes;
  label:string;
}

interface ModalProps {
  header?:ReactNode;
  footer?:ReactNode;
  children?:ReactNode;
  showModal: boolean;
  setShowModal:any;
  infoModal?:boolean
}