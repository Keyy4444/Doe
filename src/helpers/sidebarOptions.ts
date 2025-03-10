import BubblesIcon from "@assets/icons/Bubbles.svg?react";
import MessageIcon from "@assets/icons/Message.svg?react";
import StarIcon from "@assets/icons/Star.svg?react";
import BadgeIcon from "@assets/icons/Badge.svg?react";

import BoldIcon from "@assets/icons/Bold.svg?react";
import ItalicIcon from "@assets/icons/Italic.svg?react";
import UnderlineIcon from "@assets/icons/Underline.svg?react";
import StrikeIcon from "@assets/icons/Strike.svg?react";
import CodeIcon from "@assets/icons/Code.svg?react";
import LinkIcon from "@assets/icons/Link.svg?react";

import LanguagesIcon from "@assets/icons/Languages.svg?react";
import RecordingIcon from "@assets/icons/Recording.svg?react";
import PersonIcon from "@assets/icons/Person.svg?react";

import { ChainedCommands } from "@tiptap/react";

type FormattingOption = {
  command?: (editor: ChainedCommands) => ChainedCommands;
  type: string;
  icon: React.FC;
  disabled?: boolean;
};

export const formattingOptions: FormattingOption[] = [
  { type: "bold", icon: BoldIcon, command: (editor) => editor.toggleBold() },
  { type: "italic", icon: ItalicIcon, command: (editor) => editor.toggleItalic() },
  { type: "underline", icon: UnderlineIcon, command: (editor) => editor.toggleUnderline() },
  { type: "strike", icon: StrikeIcon, command: (editor) => editor.toggleStrike() },
  { type: "codeBlock", icon: CodeIcon, command: (editor) => editor.toggleCodeBlock() },
  { type: "link", icon: LinkIcon, disabled: true },
];

export const generalOptions = [
  { id: "bubbles", icon: BubblesIcon },
  { id: "message", icon: MessageIcon },
  { id: "star", icon: StarIcon },
  { id: "badge", icon: BadgeIcon },
];

export const actionOptions = [
  { id: "languages", icon: LanguagesIcon },
  { id: "recording", icon: RecordingIcon },
  { id: "person", icon: PersonIcon },
];
