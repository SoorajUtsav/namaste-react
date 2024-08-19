import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SoorajUtsav");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }

  render() {
    const userInfo = this.state.userInfo;

    return (
      <div>
        <h1 className="text-3xl font-bold text-center">User Card</h1>
        <div className="w-[400px] m-5 border border-dashed border-black rounded-lg mx-auto flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold "> {userInfo?.name}</h2>
          <img
            src={userInfo?.avatar_url}
            width={"200px"}
            height={"200px"}
            className="p-5"
          />
          <h3 className="text-xl font-bold">{userInfo?.company}</h3>
        </div>
        <div className="flex justify-center mt-18">
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
            className=" rounded-md bg-yellow-300 p-4"
          >
            <h3 className="text-lg font-bold">
              Increase Count: {this.state.count}
            </h3>
          </button>
        </div>
        <div className="font-bold text-red-600 flex justify-center mt-5 cursor-pointer">
          <span
            onClick={() => {
              this.setState({
                count: 0,
              });
            }}
          >
            RESET
          </span>
        </div>
      </div>
    );
  }
}

export default UserClass;
