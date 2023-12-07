export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user " />
      </div>
      <div className="userChat">
        <img
          src="https://nationaltoday.com/wp-content/uploads/2022/08/4568164-min-1200x834.jpg"
          alt="user"
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
