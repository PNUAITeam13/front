import {Dispatch, SetStateAction} from "react";

export const socketEvents = ({
  setValue,
  channel,
}: {
  setValue: (
    state: any
  ) => Dispatch<
    SetStateAction<any>
  >,
  channel: any;
}) => {
  channel.bind('App\\Event\\Notifications', function(data: any) {
    console.log(data,'1')

  })


  // channel.bind("App\\Events\\Notifications", (data) => {
  //   console.log(data)
  // })
  // channel.bind("App\\Events\\SendOneLead", (data) => {
  //   console.log(data.lead)
  // })
};
