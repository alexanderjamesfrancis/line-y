import JoinSessionForm from "./JoinSessionForm";
import NewSessionForm from "./NewSessionForm";

export default function SessionForm({ display }) {
  {
    if (display === "NewSession") {
      return <NewSessionForm />;
    } else if (display === "JoinSession") {
      return <JoinSessionForm />;
    } else {
      return null;
    }
  }
}
