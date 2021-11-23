export interface TodoListProps {
  items: { id: string, text: string }[];
  removeText(id: string): void;
};