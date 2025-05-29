import './SidebarPanel.scss';

type SidebarPanelProps = {
  onAddNote: () => void;
};

export function SidebarPanel({ onAddNote }: SidebarPanelProps) {
  return (
    <div className="sidebar-panel">
      <button className="tool-button" title="Cursor">
        🖱️
      </button>
      <button className="tool-button" title="Nova nota" onClick={onAddNote}>
        ➕
      </button>
    </div>
  );
}