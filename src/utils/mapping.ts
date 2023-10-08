import { EPriority, EStatus } from "./type";

// mapping when send to server
export const mapStatusTask = (status: string) => {
  switch (status) {
    case "todos":
      return EStatus.TODO;
    case "inProgress":
      return EStatus.IN_PROGRESS;
    case "done":
      return EStatus.DONE;
    default:
      return status;
  }
};

export const getBgPriorityColor = (priority: EPriority) => {
  switch (priority) {
    case EPriority.LOW:
      return "bg-green-500";
    case EPriority.MEDIUM:
      return "bg-yellow-500";
    case EPriority.HIGH:
      return "bg-red-500";
    default:
      return "bg-blue-500";
  }
};