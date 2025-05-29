import './StickyNote.scss';

type StickyNoteProps = {
    id: string;
    text: string;
    onDelete: (id: string) => void;
    x: number;
    y: number;
}
export function StickyNote({ id, text, onDelete, x, y}: StickyNoteProps) {
    const handleClickClose = () => {
        onDelete(id);
    };

  return (
    <div className="sticky-note" style={{ top: y, left: x, position: 'absolute' }}>
      <button className="close-button" onClick={handleClickClose}>×</button>
      <div contentEditable>{text}</div>
    </div>
  );
}