const NavBar: React.FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>My Website</h1>
        <div style={{display: 'flex', gap: '20px'}}>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
        </div>
      </div>
    );
  }

  
  export default NavBar;
    