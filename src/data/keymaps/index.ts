import { parseKeymap } from '../../features/keymap/binding'
import bmV35 from './typingcard-bm-v35.json'

/** 既定のキーマップ（TypingCard BM 配列 v3.5） */
export const DEFAULT_KEYMAP = parseKeymap(bmV35)
