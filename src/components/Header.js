import Button from "./Button";
const Header = ({helper,showAddTask}) => {
  return (
    <header className='header'>
      <h1 >Tasker</h1>
      <Button helper={helper} title={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'red' : 'green'} />
    </header>
  );
};
export default Header;
