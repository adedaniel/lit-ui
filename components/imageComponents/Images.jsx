import React from "react";
export const NotificationIcon = (props) => {
  return (
    <>
      <img
        {...props}
        src="/icons/bell-ring.svg"
        alt="notification"
        width={props.width}
      />
    </>
  );
};
export const OptionsIcon = (props) => {
  return (
    <>
      <img
        {...props}
        src="/icons/ellipsis-v.svg"
        alt="options"
        width={props.width}
      />
    </>
  );
};
export const UserIcon = (props) => {
  return (
    <>
      <img {...props} src="/icons/account.svg" alt="user" width={props.width} />
    </>
  );
};
export const GreenCheck = (props) => {
  return (
    <>
      <img
        {...props}
        src="/icons/green-check.svg"
        alt="green-check"
        width={props.width}
      />
    </>
  );
};
export const BlueCheck = (props) => {
  return (
    <>
      <img
        {...props}
        src="/icons/blue-check.svg"
        alt="blue-check"
        width={props.width}
      />
    </>
  );
};
export const PurpleCheck = (props) => {
  return (
    <>
      <img
        {...props}
        src="/icons/purple-check.svg"
        alt="purple-check"
        width={props.width}
      />
    </>
  );
};

export const Logo = (props) => {
  return (
    <>
      <img {...props} src="/icons/logo.png" alt="logo" width={props.width} />
    </>
  );
};
