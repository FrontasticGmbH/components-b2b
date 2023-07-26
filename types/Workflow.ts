export interface Workflow {
  id: string;
  ast: WorkflowItem;
}
export interface WorkflowItem {
  expression: string;
  text: string;
}
