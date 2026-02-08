interface Props {
  openMenu: () => void;
}

export default function Navbar({ openMenu }: Props) {
  return (
    <div className="navbar">
      <button onClick={openMenu}>
        <h1 style={{ position: 'absolute', top: 0, right: 0, margin: 20 }}>Ariel Davidi</h1>
        <span className="hamburger"></span>
      </button>
      
    </div>
  );
}
