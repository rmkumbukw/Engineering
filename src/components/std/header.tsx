//this allows us to put inputs into functions, by creating the property types first
type HeaderPro = {
  name: string;
};

function Header({ name }: HeaderPro) {
  return (
    <div className="Header">
      <h1 className="text-xl font-bold tracking-tight">{name}</h1>
    </div>
  );
}

export default Header;
