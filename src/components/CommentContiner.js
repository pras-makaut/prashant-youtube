import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentContiner = () => {
  const commentsData = [
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [],
    },
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [
        {
          name: "Akhsay Saini",
          text: "Lorem ipsum dolor sit amet, sitelit.",
          replies: [
            {
              name: "Akhsay Saini",
              text: "Lorem ipsum dolor sit amet, sitelit.",
              replies: [
                {
                  name: "Akhsay Saini",
                  text: "Lorem ipsum dolor sit amet, sitelit.",
                  replies: [
                    {
                      name: "Akhsay Saini",
                      text: "Lorem ipsum dolor sit amet, sitelit.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Akhsay Saini",
          text: "Lorem ipsum dolor sit amet, sitelit.",
          replies: [],
        },
      ],
    },
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [],
    },
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [],
    },
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [],
    },
    {
      name: "Akhsay Saini",
      text: "Lorem ipsum dolor sit amet, sitelit.",
      replies: [],
    },
  ];
  return (
    <div className="p-2 m-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContiner;
