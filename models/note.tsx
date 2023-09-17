import mongoose, { Schema } from "mongoose";

type Note_Schema = {
  title: string;
  description: string;
  isDone: boolean;
  timestamps: true;
};

// const noteSchema = new Schema(
//   {
//     title: String,
//     description: String,
//     isDone: Boolean,
//   },
//   {
//     timestamps: true,
//   }
// );

// schema with Note_Schema type and timestamps set to true
const noteSchema = new Schema<Note_Schema>(
  {
    title: String,
    description: String,
    isDone: Boolean,
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
