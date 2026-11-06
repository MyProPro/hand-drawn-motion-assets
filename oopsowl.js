/*! OopsOwl engine — code-built night cartoons. Fredoka font (SIL OFL), webm-muxer (MIT, Vanilagy). */
(function(){ const st = document.createElement('style'); st.textContent = "@font-face{font-family:Fredoka;font-weight:700;src:url(data:font/woff2;base64,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) format('woff2')}"; (document.head || document.documentElement).appendChild(st); })();
"use strict";
var WebMMuxer = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ArrayBufferTarget: () => ArrayBufferTarget,
    FileSystemWritableFileStreamTarget: () => FileSystemWritableFileStreamTarget,
    Muxer: () => Muxer,
    StreamTarget: () => StreamTarget,
    SubtitleEncoder: () => SubtitleEncoder
  });

  // src/ebml.ts
  var EBMLFloat32 = class {
    constructor(value) {
      this.value = value;
    }
  };
  var EBMLFloat64 = class {
    constructor(value) {
      this.value = value;
    }
  };
  var measureUnsignedInt = (value) => {
    if (value < 1 << 8) {
      return 1;
    } else if (value < 1 << 16) {
      return 2;
    } else if (value < 1 << 24) {
      return 3;
    } else if (value < 2 ** 32) {
      return 4;
    } else if (value < 2 ** 40) {
      return 5;
    } else {
      return 6;
    }
  };
  var measureEBMLVarInt = (value) => {
    if (value < (1 << 7) - 1) {
      return 1;
    } else if (value < (1 << 14) - 1) {
      return 2;
    } else if (value < (1 << 21) - 1) {
      return 3;
    } else if (value < (1 << 28) - 1) {
      return 4;
    } else if (value < 2 ** 35 - 1) {
      return 5;
    } else if (value < 2 ** 42 - 1) {
      return 6;
    } else {
      throw new Error("EBML VINT size not supported " + value);
    }
  };

  // src/misc.ts
  var readBits = (bytes, start, end) => {
    let result = 0;
    for (let i = start; i < end; i++) {
      let byteIndex = Math.floor(i / 8);
      let byte = bytes[byteIndex];
      let bitIndex = 7 - (i & 7);
      let bit = (byte & 1 << bitIndex) >> bitIndex;
      result <<= 1;
      result |= bit;
    }
    return result;
  };
  var writeBits = (bytes, start, end, value) => {
    for (let i = start; i < end; i++) {
      let byteIndex = Math.floor(i / 8);
      let byte = bytes[byteIndex];
      let bitIndex = 7 - (i & 7);
      byte &= ~(1 << bitIndex);
      byte |= (value & 1 << end - i - 1) >> end - i - 1 << bitIndex;
      bytes[byteIndex] = byte;
    }
  };

  // src/target.ts
  var isTarget = Symbol("isTarget");
  var Target = class {
  };
  isTarget;
  var ArrayBufferTarget = class extends Target {
    constructor() {
      super(...arguments);
      this.buffer = null;
    }
  };
  var StreamTarget = class extends Target {
    constructor(options) {
      super();
      this.options = options;
      if (typeof options !== "object") {
        throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");
      }
      if (options.onData) {
        if (typeof options.onData !== "function") {
          throw new TypeError("options.onData, when provided, must be a function.");
        }
        if (options.onData.length < 2) {
          throw new TypeError(
            "options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs."
          );
        }
      }
      if (options.onHeader && typeof options.onHeader !== "function") {
        throw new TypeError("options.onHeader, when provided, must be a function.");
      }
      if (options.onCluster && typeof options.onCluster !== "function") {
        throw new TypeError("options.onCluster, when provided, must be a function.");
      }
      if (options.chunked !== void 0 && typeof options.chunked !== "boolean") {
        throw new TypeError("options.chunked, when provided, must be a boolean.");
      }
      if (options.chunkSize !== void 0 && (!Number.isInteger(options.chunkSize) || options.chunkSize < 1024)) {
        throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.");
      }
    }
  };
  var FileSystemWritableFileStreamTarget = class extends Target {
    constructor(stream, options) {
      super();
      this.stream = stream;
      this.options = options;
      if (!(stream instanceof FileSystemWritableFileStream)) {
        throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");
      }
      if (options !== void 0 && typeof options !== "object") {
        throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");
      }
      if (options) {
        if (options.chunkSize !== void 0 && (!Number.isInteger(options.chunkSize) || options.chunkSize <= 0)) {
          throw new TypeError("options.chunkSize, when provided, must be a positive integer");
        }
      }
    }
  };

  // src/writer.ts
  var _helper, _helperView, _writeByte, writeByte_fn, _writeFloat32, writeFloat32_fn, _writeFloat64, writeFloat64_fn, _writeUnsignedInt, writeUnsignedInt_fn, _writeString, writeString_fn;
  var Writer = class {
    constructor() {
      __privateAdd(this, _writeByte);
      __privateAdd(this, _writeFloat32);
      __privateAdd(this, _writeFloat64);
      __privateAdd(this, _writeUnsignedInt);
      __privateAdd(this, _writeString);
      this.pos = 0;
      __privateAdd(this, _helper, new Uint8Array(8));
      __privateAdd(this, _helperView, new DataView(__privateGet(this, _helper).buffer));
      this.offsets = /* @__PURE__ */ new WeakMap();
      this.dataOffsets = /* @__PURE__ */ new WeakMap();
    }
    seek(newPos) {
      this.pos = newPos;
    }
    writeEBMLVarInt(value, width = measureEBMLVarInt(value)) {
      let pos = 0;
      switch (width) {
        case 1:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 7 | value);
          break;
        case 2:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 6 | value >> 8);
          __privateGet(this, _helperView).setUint8(pos++, value);
          break;
        case 3:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 5 | value >> 16);
          __privateGet(this, _helperView).setUint8(pos++, value >> 8);
          __privateGet(this, _helperView).setUint8(pos++, value);
          break;
        case 4:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 4 | value >> 24);
          __privateGet(this, _helperView).setUint8(pos++, value >> 16);
          __privateGet(this, _helperView).setUint8(pos++, value >> 8);
          __privateGet(this, _helperView).setUint8(pos++, value);
          break;
        case 5:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 3 | value / 2 ** 32 & 7);
          __privateGet(this, _helperView).setUint8(pos++, value >> 24);
          __privateGet(this, _helperView).setUint8(pos++, value >> 16);
          __privateGet(this, _helperView).setUint8(pos++, value >> 8);
          __privateGet(this, _helperView).setUint8(pos++, value);
          break;
        case 6:
          __privateGet(this, _helperView).setUint8(pos++, 1 << 2 | value / 2 ** 40 & 3);
          __privateGet(this, _helperView).setUint8(pos++, value / 2 ** 32 | 0);
          __privateGet(this, _helperView).setUint8(pos++, value >> 24);
          __privateGet(this, _helperView).setUint8(pos++, value >> 16);
          __privateGet(this, _helperView).setUint8(pos++, value >> 8);
          __privateGet(this, _helperView).setUint8(pos++, value);
          break;
        default:
          throw new Error("Bad EBML VINT size " + width);
      }
      this.write(__privateGet(this, _helper).subarray(0, pos));
    }
    writeEBML(data) {
      if (data === null)
        return;
      if (data instanceof Uint8Array) {
        this.write(data);
      } else if (Array.isArray(data)) {
        for (let elem of data) {
          this.writeEBML(elem);
        }
      } else {
        this.offsets.set(data, this.pos);
        __privateMethod(this, _writeUnsignedInt, writeUnsignedInt_fn).call(this, data.id);
        if (Array.isArray(data.data)) {
          let sizePos = this.pos;
          let sizeSize = data.size === -1 ? 1 : data.size ?? 4;
          if (data.size === -1) {
            __privateMethod(this, _writeByte, writeByte_fn).call(this, 255);
          } else {
            this.seek(this.pos + sizeSize);
          }
          let startPos = this.pos;
          this.dataOffsets.set(data, startPos);
          this.writeEBML(data.data);
          if (data.size !== -1) {
            let size = this.pos - startPos;
            let endPos = this.pos;
            this.seek(sizePos);
            this.writeEBMLVarInt(size, sizeSize);
            this.seek(endPos);
          }
        } else if (typeof data.data === "number") {
          let size = data.size ?? measureUnsignedInt(data.data);
          this.writeEBMLVarInt(size);
          __privateMethod(this, _writeUnsignedInt, writeUnsignedInt_fn).call(this, data.data, size);
        } else if (typeof data.data === "string") {
          this.writeEBMLVarInt(data.data.length);
          __privateMethod(this, _writeString, writeString_fn).call(this, data.data);
        } else if (data.data instanceof Uint8Array) {
          this.writeEBMLVarInt(data.data.byteLength, data.size);
          this.write(data.data);
        } else if (data.data instanceof EBMLFloat32) {
          this.writeEBMLVarInt(4);
          __privateMethod(this, _writeFloat32, writeFloat32_fn).call(this, data.data.value);
        } else if (data.data instanceof EBMLFloat64) {
          this.writeEBMLVarInt(8);
          __privateMethod(this, _writeFloat64, writeFloat64_fn).call(this, data.data.value);
        }
      }
    }
  };
  _helper = new WeakMap();
  _helperView = new WeakMap();
  _writeByte = new WeakSet();
  writeByte_fn = function(value) {
    __privateGet(this, _helperView).setUint8(0, value);
    this.write(__privateGet(this, _helper).subarray(0, 1));
  };
  _writeFloat32 = new WeakSet();
  writeFloat32_fn = function(value) {
    __privateGet(this, _helperView).setFloat32(0, value, false);
    this.write(__privateGet(this, _helper).subarray(0, 4));
  };
  _writeFloat64 = new WeakSet();
  writeFloat64_fn = function(value) {
    __privateGet(this, _helperView).setFloat64(0, value, false);
    this.write(__privateGet(this, _helper));
  };
  _writeUnsignedInt = new WeakSet();
  writeUnsignedInt_fn = function(value, width = measureUnsignedInt(value)) {
    let pos = 0;
    switch (width) {
      case 6:
        __privateGet(this, _helperView).setUint8(pos++, value / 2 ** 40 | 0);
      case 5:
        __privateGet(this, _helperView).setUint8(pos++, value / 2 ** 32 | 0);
      case 4:
        __privateGet(this, _helperView).setUint8(pos++, value >> 24);
      case 3:
        __privateGet(this, _helperView).setUint8(pos++, value >> 16);
      case 2:
        __privateGet(this, _helperView).setUint8(pos++, value >> 8);
      case 1:
        __privateGet(this, _helperView).setUint8(pos++, value);
        break;
      default:
        throw new Error("Bad UINT size " + width);
    }
    this.write(__privateGet(this, _helper).subarray(0, pos));
  };
  _writeString = new WeakSet();
  writeString_fn = function(str) {
    this.write(new Uint8Array(str.split("").map((x) => x.charCodeAt(0))));
  };
  var _target, _buffer, _bytes, _ensureSize, ensureSize_fn;
  var ArrayBufferTargetWriter = class extends Writer {
    constructor(target) {
      super();
      __privateAdd(this, _ensureSize);
      __privateAdd(this, _target, void 0);
      __privateAdd(this, _buffer, new ArrayBuffer(2 ** 16));
      __privateAdd(this, _bytes, new Uint8Array(__privateGet(this, _buffer)));
      __privateSet(this, _target, target);
    }
    write(data) {
      __privateMethod(this, _ensureSize, ensureSize_fn).call(this, this.pos + data.byteLength);
      __privateGet(this, _bytes).set(data, this.pos);
      this.pos += data.byteLength;
    }
    finalize() {
      __privateMethod(this, _ensureSize, ensureSize_fn).call(this, this.pos);
      __privateGet(this, _target).buffer = __privateGet(this, _buffer).slice(0, this.pos);
    }
  };
  _target = new WeakMap();
  _buffer = new WeakMap();
  _bytes = new WeakMap();
  _ensureSize = new WeakSet();
  ensureSize_fn = function(size) {
    let newLength = __privateGet(this, _buffer).byteLength;
    while (newLength < size)
      newLength *= 2;
    if (newLength === __privateGet(this, _buffer).byteLength)
      return;
    let newBuffer = new ArrayBuffer(newLength);
    let newBytes = new Uint8Array(newBuffer);
    newBytes.set(__privateGet(this, _bytes), 0);
    __privateSet(this, _buffer, newBuffer);
    __privateSet(this, _bytes, newBytes);
  };
  var _trackingWrites, _trackedWrites, _trackedStart, _trackedEnd;
  var BaseStreamTargetWriter = class extends Writer {
    constructor(target) {
      super();
      this.target = target;
      __privateAdd(this, _trackingWrites, false);
      __privateAdd(this, _trackedWrites, void 0);
      __privateAdd(this, _trackedStart, void 0);
      __privateAdd(this, _trackedEnd, void 0);
    }
    write(data) {
      if (!__privateGet(this, _trackingWrites))
        return;
      let pos = this.pos;
      if (pos < __privateGet(this, _trackedStart)) {
        if (pos + data.byteLength <= __privateGet(this, _trackedStart))
          return;
        data = data.subarray(__privateGet(this, _trackedStart) - pos);
        pos = 0;
      }
      let neededSize = pos + data.byteLength - __privateGet(this, _trackedStart);
      let newLength = __privateGet(this, _trackedWrites).byteLength;
      while (newLength < neededSize)
        newLength *= 2;
      if (newLength !== __privateGet(this, _trackedWrites).byteLength) {
        let copy = new Uint8Array(newLength);
        copy.set(__privateGet(this, _trackedWrites), 0);
        __privateSet(this, _trackedWrites, copy);
      }
      __privateGet(this, _trackedWrites).set(data, pos - __privateGet(this, _trackedStart));
      __privateSet(this, _trackedEnd, Math.max(__privateGet(this, _trackedEnd), pos + data.byteLength));
    }
    startTrackingWrites() {
      __privateSet(this, _trackingWrites, true);
      __privateSet(this, _trackedWrites, new Uint8Array(2 ** 10));
      __privateSet(this, _trackedStart, this.pos);
      __privateSet(this, _trackedEnd, this.pos);
    }
    getTrackedWrites() {
      if (!__privateGet(this, _trackingWrites)) {
        throw new Error("Can't get tracked writes since nothing was tracked.");
      }
      let slice = __privateGet(this, _trackedWrites).subarray(0, __privateGet(this, _trackedEnd) - __privateGet(this, _trackedStart));
      let result = {
        data: slice,
        start: __privateGet(this, _trackedStart),
        end: __privateGet(this, _trackedEnd)
      };
      __privateSet(this, _trackedWrites, void 0);
      __privateSet(this, _trackingWrites, false);
      return result;
    }
  };
  _trackingWrites = new WeakMap();
  _trackedWrites = new WeakMap();
  _trackedStart = new WeakMap();
  _trackedEnd = new WeakMap();
  var DEFAULT_CHUNK_SIZE = 2 ** 24;
  var MAX_CHUNKS_AT_ONCE = 2;
  var _sections, _lastFlushEnd, _ensureMonotonicity, _chunked, _chunkSize, _chunks, _writeDataIntoChunks, writeDataIntoChunks_fn, _insertSectionIntoChunk, insertSectionIntoChunk_fn, _createChunk, createChunk_fn, _flushChunks, flushChunks_fn;
  var StreamTargetWriter = class extends BaseStreamTargetWriter {
    constructor(target, ensureMonotonicity) {
      super(target);
      __privateAdd(this, _writeDataIntoChunks);
      __privateAdd(this, _insertSectionIntoChunk);
      __privateAdd(this, _createChunk);
      __privateAdd(this, _flushChunks);
      __privateAdd(this, _sections, []);
      __privateAdd(this, _lastFlushEnd, 0);
      __privateAdd(this, _ensureMonotonicity, void 0);
      __privateAdd(this, _chunked, void 0);
      __privateAdd(this, _chunkSize, void 0);
      __privateAdd(this, _chunks, []);
      __privateSet(this, _ensureMonotonicity, ensureMonotonicity);
      __privateSet(this, _chunked, target.options?.chunked ?? false);
      __privateSet(this, _chunkSize, target.options?.chunkSize ?? DEFAULT_CHUNK_SIZE);
    }
    write(data) {
      super.write(data);
      __privateGet(this, _sections).push({
        data: data.slice(),
        start: this.pos
      });
      this.pos += data.byteLength;
    }
    flush() {
      if (__privateGet(this, _sections).length === 0)
        return;
      let chunks = [];
      let sorted = [...__privateGet(this, _sections)].sort((a, b) => a.start - b.start);
      chunks.push({
        start: sorted[0].start,
        size: sorted[0].data.byteLength
      });
      for (let i = 1; i < sorted.length; i++) {
        let lastChunk = chunks[chunks.length - 1];
        let section = sorted[i];
        if (section.start <= lastChunk.start + lastChunk.size) {
          lastChunk.size = Math.max(lastChunk.size, section.start + section.data.byteLength - lastChunk.start);
        } else {
          chunks.push({
            start: section.start,
            size: section.data.byteLength
          });
        }
      }
      for (let chunk of chunks) {
        chunk.data = new Uint8Array(chunk.size);
        for (let section of __privateGet(this, _sections)) {
          if (chunk.start <= section.start && section.start < chunk.start + chunk.size) {
            chunk.data.set(section.data, section.start - chunk.start);
          }
        }
        if (__privateGet(this, _chunked)) {
          __privateMethod(this, _writeDataIntoChunks, writeDataIntoChunks_fn).call(this, chunk.data, chunk.start);
          __privateMethod(this, _flushChunks, flushChunks_fn).call(this);
        } else {
          if (__privateGet(this, _ensureMonotonicity) && chunk.start < __privateGet(this, _lastFlushEnd)) {
            throw new Error("Internal error: Monotonicity violation.");
          }
          this.target.options.onData?.(chunk.data, chunk.start);
          __privateSet(this, _lastFlushEnd, chunk.start + chunk.data.byteLength);
        }
      }
      __privateGet(this, _sections).length = 0;
    }
    finalize() {
      if (__privateGet(this, _chunked)) {
        __privateMethod(this, _flushChunks, flushChunks_fn).call(this, true);
      }
    }
  };
  _sections = new WeakMap();
  _lastFlushEnd = new WeakMap();
  _ensureMonotonicity = new WeakMap();
  _chunked = new WeakMap();
  _chunkSize = new WeakMap();
  _chunks = new WeakMap();
  _writeDataIntoChunks = new WeakSet();
  writeDataIntoChunks_fn = function(data, position) {
    let chunkIndex = __privateGet(this, _chunks).findIndex((x) => x.start <= position && position < x.start + __privateGet(this, _chunkSize));
    if (chunkIndex === -1)
      chunkIndex = __privateMethod(this, _createChunk, createChunk_fn).call(this, position);
    let chunk = __privateGet(this, _chunks)[chunkIndex];
    let relativePosition = position - chunk.start;
    let toWrite = data.subarray(0, Math.min(__privateGet(this, _chunkSize) - relativePosition, data.byteLength));
    chunk.data.set(toWrite, relativePosition);
    let section = {
      start: relativePosition,
      end: relativePosition + toWrite.byteLength
    };
    __privateMethod(this, _insertSectionIntoChunk, insertSectionIntoChunk_fn).call(this, chunk, section);
    if (chunk.written[0].start === 0 && chunk.written[0].end === __privateGet(this, _chunkSize)) {
      chunk.shouldFlush = true;
    }
    if (__privateGet(this, _chunks).length > MAX_CHUNKS_AT_ONCE) {
      for (let i = 0; i < __privateGet(this, _chunks).length - 1; i++) {
        __privateGet(this, _chunks)[i].shouldFlush = true;
      }
      __privateMethod(this, _flushChunks, flushChunks_fn).call(this);
    }
    if (toWrite.byteLength < data.byteLength) {
      __privateMethod(this, _writeDataIntoChunks, writeDataIntoChunks_fn).call(this, data.subarray(toWrite.byteLength), position + toWrite.byteLength);
    }
  };
  _insertSectionIntoChunk = new WeakSet();
  insertSectionIntoChunk_fn = function(chunk, section) {
    let low = 0;
    let high = chunk.written.length - 1;
    let index = -1;
    while (low <= high) {
      let mid = Math.floor(low + (high - low + 1) / 2);
      if (chunk.written[mid].start <= section.start) {
        low = mid + 1;
        index = mid;
      } else {
        high = mid - 1;
      }
    }
    chunk.written.splice(index + 1, 0, section);
    if (index === -1 || chunk.written[index].end < section.start)
      index++;
    while (index < chunk.written.length - 1 && chunk.written[index].end >= chunk.written[index + 1].start) {
      chunk.written[index].end = Math.max(chunk.written[index].end, chunk.written[index + 1].end);
      chunk.written.splice(index + 1, 1);
    }
  };
  _createChunk = new WeakSet();
  createChunk_fn = function(includesPosition) {
    let start = Math.floor(includesPosition / __privateGet(this, _chunkSize)) * __privateGet(this, _chunkSize);
    let chunk = {
      start,
      data: new Uint8Array(__privateGet(this, _chunkSize)),
      written: [],
      shouldFlush: false
    };
    __privateGet(this, _chunks).push(chunk);
    __privateGet(this, _chunks).sort((a, b) => a.start - b.start);
    return __privateGet(this, _chunks).indexOf(chunk);
  };
  _flushChunks = new WeakSet();
  flushChunks_fn = function(force = false) {
    for (let i = 0; i < __privateGet(this, _chunks).length; i++) {
      let chunk = __privateGet(this, _chunks)[i];
      if (!chunk.shouldFlush && !force)
        continue;
      for (let section of chunk.written) {
        if (__privateGet(this, _ensureMonotonicity) && chunk.start + section.start < __privateGet(this, _lastFlushEnd)) {
          throw new Error("Internal error: Monotonicity violation.");
        }
        this.target.options.onData?.(
          chunk.data.subarray(section.start, section.end),
          chunk.start + section.start
        );
        __privateSet(this, _lastFlushEnd, chunk.start + section.end);
      }
      __privateGet(this, _chunks).splice(i--, 1);
    }
  };
  var FileSystemWritableFileStreamTargetWriter = class extends StreamTargetWriter {
    constructor(target, ensureMonotonicity) {
      super(new StreamTarget({
        onData: (data, position) => target.stream.write({
          type: "write",
          data,
          position
        }),
        chunked: true,
        chunkSize: target.options?.chunkSize
      }), ensureMonotonicity);
    }
  };

  // src/muxer.ts
  var VIDEO_TRACK_NUMBER = 1;
  var AUDIO_TRACK_NUMBER = 2;
  var SUBTITLE_TRACK_NUMBER = 3;
  var VIDEO_TRACK_TYPE = 1;
  var AUDIO_TRACK_TYPE = 2;
  var SUBTITLE_TRACK_TYPE = 17;
  var MAX_CHUNK_LENGTH_MS = 2 ** 15;
  var CODEC_PRIVATE_MAX_SIZE = 2 ** 13;
  var APP_NAME = "https://github.com/Vanilagy/webm-muxer";
  var SEGMENT_SIZE_BYTES = 6;
  var CLUSTER_SIZE_BYTES = 5;
  var FIRST_TIMESTAMP_BEHAVIORS = ["strict", "offset", "permissive"];
  var _options, _writer, _segment, _segmentInfo, _seekHead, _tracksElement, _segmentDuration, _colourElement, _videoCodecPrivate, _audioCodecPrivate, _subtitleCodecPrivate, _cues, _currentCluster, _currentClusterTimestamp, _duration, _videoChunkQueue, _audioChunkQueue, _subtitleChunkQueue, _firstVideoTimestamp, _firstAudioTimestamp, _lastVideoTimestamp, _lastAudioTimestamp, _lastSubtitleTimestamp, _colorSpace, _finalized, _validateOptions, validateOptions_fn, _createFileHeader, createFileHeader_fn, _writeEBMLHeader, writeEBMLHeader_fn, _createCodecPrivatePlaceholders, createCodecPrivatePlaceholders_fn, _createColourElement, createColourElement_fn, _createSeekHead, createSeekHead_fn, _createSegmentInfo, createSegmentInfo_fn, _createTracks, createTracks_fn, _createSegment, createSegment_fn, _createCues, createCues_fn, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn, _segmentDataOffset, segmentDataOffset_get, _writeVideoDecoderConfig, writeVideoDecoderConfig_fn, _fixVP9ColorSpace, fixVP9ColorSpace_fn, _writeSubtitleChunks, writeSubtitleChunks_fn, _createInternalChunk, createInternalChunk_fn, _validateTimestamp, validateTimestamp_fn, _writeBlock, writeBlock_fn, _createCodecPrivateElement, createCodecPrivateElement_fn, _writeCodecPrivate, writeCodecPrivate_fn, _createNewCluster, createNewCluster_fn, _finalizeCurrentCluster, finalizeCurrentCluster_fn, _ensureNotFinalized, ensureNotFinalized_fn;
  var Muxer = class {
    constructor(options) {
      __privateAdd(this, _validateOptions);
      __privateAdd(this, _createFileHeader);
      __privateAdd(this, _writeEBMLHeader);
      __privateAdd(this, _createCodecPrivatePlaceholders);
      __privateAdd(this, _createColourElement);
      __privateAdd(this, _createSeekHead);
      __privateAdd(this, _createSegmentInfo);
      __privateAdd(this, _createTracks);
      __privateAdd(this, _createSegment);
      __privateAdd(this, _createCues);
      __privateAdd(this, _maybeFlushStreamingTargetWriter);
      __privateAdd(this, _segmentDataOffset);
      __privateAdd(this, _writeVideoDecoderConfig);
      __privateAdd(this, _fixVP9ColorSpace);
      __privateAdd(this, _writeSubtitleChunks);
      __privateAdd(this, _createInternalChunk);
      __privateAdd(this, _validateTimestamp);
      __privateAdd(this, _writeBlock);
      __privateAdd(this, _createCodecPrivateElement);
      __privateAdd(this, _writeCodecPrivate);
      __privateAdd(this, _createNewCluster);
      __privateAdd(this, _finalizeCurrentCluster);
      __privateAdd(this, _ensureNotFinalized);
      __privateAdd(this, _options, void 0);
      __privateAdd(this, _writer, void 0);
      __privateAdd(this, _segment, void 0);
      __privateAdd(this, _segmentInfo, void 0);
      __privateAdd(this, _seekHead, void 0);
      __privateAdd(this, _tracksElement, void 0);
      __privateAdd(this, _segmentDuration, void 0);
      __privateAdd(this, _colourElement, void 0);
      __privateAdd(this, _videoCodecPrivate, void 0);
      __privateAdd(this, _audioCodecPrivate, void 0);
      __privateAdd(this, _subtitleCodecPrivate, void 0);
      __privateAdd(this, _cues, void 0);
      __privateAdd(this, _currentCluster, void 0);
      __privateAdd(this, _currentClusterTimestamp, void 0);
      __privateAdd(this, _duration, 0);
      __privateAdd(this, _videoChunkQueue, []);
      __privateAdd(this, _audioChunkQueue, []);
      __privateAdd(this, _subtitleChunkQueue, []);
      __privateAdd(this, _firstVideoTimestamp, void 0);
      __privateAdd(this, _firstAudioTimestamp, void 0);
      __privateAdd(this, _lastVideoTimestamp, -1);
      __privateAdd(this, _lastAudioTimestamp, -1);
      __privateAdd(this, _lastSubtitleTimestamp, -1);
      __privateAdd(this, _colorSpace, void 0);
      __privateAdd(this, _finalized, false);
      __privateMethod(this, _validateOptions, validateOptions_fn).call(this, options);
      __privateSet(this, _options, {
        type: "webm",
        firstTimestampBehavior: "strict",
        ...options
      });
      this.target = options.target;
      let ensureMonotonicity = !!__privateGet(this, _options).streaming;
      if (options.target instanceof ArrayBufferTarget) {
        __privateSet(this, _writer, new ArrayBufferTargetWriter(options.target));
      } else if (options.target instanceof StreamTarget) {
        __privateSet(this, _writer, new StreamTargetWriter(options.target, ensureMonotonicity));
      } else if (options.target instanceof FileSystemWritableFileStreamTarget) {
        __privateSet(this, _writer, new FileSystemWritableFileStreamTargetWriter(options.target, ensureMonotonicity));
      } else {
        throw new Error(`Invalid target: ${options.target}`);
      }
      __privateMethod(this, _createFileHeader, createFileHeader_fn).call(this);
    }
    addVideoChunk(chunk, meta, timestamp) {
      if (!(chunk instanceof EncodedVideoChunk)) {
        throw new TypeError("addVideoChunk's first argument (chunk) must be of type EncodedVideoChunk.");
      }
      if (meta && typeof meta !== "object") {
        throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");
      }
      if (timestamp !== void 0 && (!Number.isFinite(timestamp) || timestamp < 0)) {
        throw new TypeError(
          "addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number."
        );
      }
      let data = new Uint8Array(chunk.byteLength);
      chunk.copyTo(data);
      this.addVideoChunkRaw(data, chunk.type, timestamp ?? chunk.timestamp, meta);
    }
    addVideoChunkRaw(data, type, timestamp, meta) {
      if (!(data instanceof Uint8Array)) {
        throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");
      }
      if (type !== "key" && type !== "delta") {
        throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");
      }
      if (!Number.isFinite(timestamp) || timestamp < 0) {
        throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");
      }
      if (meta && typeof meta !== "object") {
        throw new TypeError("addVideoChunkRaw's fourth argument (meta), when provided, must be an object.");
      }
      __privateMethod(this, _ensureNotFinalized, ensureNotFinalized_fn).call(this);
      if (!__privateGet(this, _options).video)
        throw new Error("No video track declared.");
      if (__privateGet(this, _firstVideoTimestamp) === void 0)
        __privateSet(this, _firstVideoTimestamp, timestamp);
      if (meta)
        __privateMethod(this, _writeVideoDecoderConfig, writeVideoDecoderConfig_fn).call(this, meta);
      let videoChunk = __privateMethod(this, _createInternalChunk, createInternalChunk_fn).call(this, data, type, timestamp, VIDEO_TRACK_NUMBER);
      if (__privateGet(this, _options).video.codec === "V_VP9")
        __privateMethod(this, _fixVP9ColorSpace, fixVP9ColorSpace_fn).call(this, videoChunk);
      __privateSet(this, _lastVideoTimestamp, videoChunk.timestamp);
      while (__privateGet(this, _audioChunkQueue).length > 0 && __privateGet(this, _audioChunkQueue)[0].timestamp <= videoChunk.timestamp) {
        let audioChunk = __privateGet(this, _audioChunkQueue).shift();
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, audioChunk, false);
      }
      if (!__privateGet(this, _options).audio || videoChunk.timestamp <= __privateGet(this, _lastAudioTimestamp)) {
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, videoChunk, true);
      } else {
        __privateGet(this, _videoChunkQueue).push(videoChunk);
      }
      __privateMethod(this, _writeSubtitleChunks, writeSubtitleChunks_fn).call(this);
      __privateMethod(this, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn).call(this);
    }
    addAudioChunk(chunk, meta, timestamp) {
      if (!(chunk instanceof EncodedAudioChunk)) {
        throw new TypeError("addAudioChunk's first argument (chunk) must be of type EncodedAudioChunk.");
      }
      if (meta && typeof meta !== "object") {
        throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");
      }
      if (timestamp !== void 0 && (!Number.isFinite(timestamp) || timestamp < 0)) {
        throw new TypeError(
          "addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number."
        );
      }
      let data = new Uint8Array(chunk.byteLength);
      chunk.copyTo(data);
      this.addAudioChunkRaw(data, chunk.type, timestamp ?? chunk.timestamp, meta);
    }
    addAudioChunkRaw(data, type, timestamp, meta) {
      if (!(data instanceof Uint8Array)) {
        throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");
      }
      if (type !== "key" && type !== "delta") {
        throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");
      }
      if (!Number.isFinite(timestamp) || timestamp < 0) {
        throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");
      }
      if (meta && typeof meta !== "object") {
        throw new TypeError("addAudioChunkRaw's fourth argument (meta), when provided, must be an object.");
      }
      __privateMethod(this, _ensureNotFinalized, ensureNotFinalized_fn).call(this);
      if (!__privateGet(this, _options).audio)
        throw new Error("No audio track declared.");
      if (__privateGet(this, _firstAudioTimestamp) === void 0)
        __privateSet(this, _firstAudioTimestamp, timestamp);
      if (meta?.decoderConfig) {
        if (__privateGet(this, _options).streaming) {
          __privateSet(this, _audioCodecPrivate, __privateMethod(this, _createCodecPrivateElement, createCodecPrivateElement_fn).call(this, meta.decoderConfig.description));
        } else {
          __privateMethod(this, _writeCodecPrivate, writeCodecPrivate_fn).call(this, __privateGet(this, _audioCodecPrivate), meta.decoderConfig.description);
        }
      }
      let audioChunk = __privateMethod(this, _createInternalChunk, createInternalChunk_fn).call(this, data, type, timestamp, AUDIO_TRACK_NUMBER);
      __privateSet(this, _lastAudioTimestamp, audioChunk.timestamp);
      while (__privateGet(this, _videoChunkQueue).length > 0 && __privateGet(this, _videoChunkQueue)[0].timestamp <= audioChunk.timestamp) {
        let videoChunk = __privateGet(this, _videoChunkQueue).shift();
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, videoChunk, true);
      }
      if (!__privateGet(this, _options).video || audioChunk.timestamp <= __privateGet(this, _lastVideoTimestamp)) {
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, audioChunk, !__privateGet(this, _options).video);
      } else {
        __privateGet(this, _audioChunkQueue).push(audioChunk);
      }
      __privateMethod(this, _writeSubtitleChunks, writeSubtitleChunks_fn).call(this);
      __privateMethod(this, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn).call(this);
    }
    addSubtitleChunk(chunk, meta, timestamp) {
      if (typeof chunk !== "object" || !chunk) {
        throw new TypeError("addSubtitleChunk's first argument (chunk) must be an object.");
      } else {
        if (!(chunk.body instanceof Uint8Array)) {
          throw new TypeError("body must be an instance of Uint8Array.");
        }
        if (!Number.isFinite(chunk.timestamp) || chunk.timestamp < 0) {
          throw new TypeError("timestamp must be a non-negative real number.");
        }
        if (!Number.isFinite(chunk.duration) || chunk.duration < 0) {
          throw new TypeError("duration must be a non-negative real number.");
        }
        if (chunk.additions && !(chunk.additions instanceof Uint8Array)) {
          throw new TypeError("additions, when present, must be an instance of Uint8Array.");
        }
      }
      if (typeof meta !== "object") {
        throw new TypeError("addSubtitleChunk's second argument (meta) must be an object.");
      }
      __privateMethod(this, _ensureNotFinalized, ensureNotFinalized_fn).call(this);
      if (!__privateGet(this, _options).subtitles)
        throw new Error("No subtitle track declared.");
      if (meta?.decoderConfig) {
        if (__privateGet(this, _options).streaming) {
          __privateSet(this, _subtitleCodecPrivate, __privateMethod(this, _createCodecPrivateElement, createCodecPrivateElement_fn).call(this, meta.decoderConfig.description));
        } else {
          __privateMethod(this, _writeCodecPrivate, writeCodecPrivate_fn).call(this, __privateGet(this, _subtitleCodecPrivate), meta.decoderConfig.description);
        }
      }
      let subtitleChunk = __privateMethod(this, _createInternalChunk, createInternalChunk_fn).call(this, chunk.body, "key", timestamp ?? chunk.timestamp, SUBTITLE_TRACK_NUMBER, chunk.duration, chunk.additions);
      __privateSet(this, _lastSubtitleTimestamp, subtitleChunk.timestamp);
      __privateGet(this, _subtitleChunkQueue).push(subtitleChunk);
      __privateMethod(this, _writeSubtitleChunks, writeSubtitleChunks_fn).call(this);
      __privateMethod(this, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn).call(this);
    }
    finalize() {
      if (__privateGet(this, _finalized)) {
        throw new Error("Cannot finalize a muxer more than once.");
      }
      while (__privateGet(this, _videoChunkQueue).length > 0)
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, __privateGet(this, _videoChunkQueue).shift(), true);
      while (__privateGet(this, _audioChunkQueue).length > 0)
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, __privateGet(this, _audioChunkQueue).shift(), true);
      while (__privateGet(this, _subtitleChunkQueue).length > 0 && __privateGet(this, _subtitleChunkQueue)[0].timestamp <= __privateGet(this, _duration)) {
        __privateMethod(this, _writeBlock, writeBlock_fn).call(this, __privateGet(this, _subtitleChunkQueue).shift(), false);
      }
      if (__privateGet(this, _currentCluster)) {
        __privateMethod(this, _finalizeCurrentCluster, finalizeCurrentCluster_fn).call(this);
      }
      __privateGet(this, _writer).writeEBML(__privateGet(this, _cues));
      if (!__privateGet(this, _options).streaming) {
        let endPos = __privateGet(this, _writer).pos;
        let segmentSize = __privateGet(this, _writer).pos - __privateGet(this, _segmentDataOffset, segmentDataOffset_get);
        __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(__privateGet(this, _segment)) + 4);
        __privateGet(this, _writer).writeEBMLVarInt(segmentSize, SEGMENT_SIZE_BYTES);
        __privateGet(this, _segmentDuration).data = new EBMLFloat64(__privateGet(this, _duration));
        __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(__privateGet(this, _segmentDuration)));
        __privateGet(this, _writer).writeEBML(__privateGet(this, _segmentDuration));
        __privateGet(this, _seekHead).data[0].data[1].data = __privateGet(this, _writer).offsets.get(__privateGet(this, _cues)) - __privateGet(this, _segmentDataOffset, segmentDataOffset_get);
        __privateGet(this, _seekHead).data[1].data[1].data = __privateGet(this, _writer).offsets.get(__privateGet(this, _segmentInfo)) - __privateGet(this, _segmentDataOffset, segmentDataOffset_get);
        __privateGet(this, _seekHead).data[2].data[1].data = __privateGet(this, _writer).offsets.get(__privateGet(this, _tracksElement)) - __privateGet(this, _segmentDataOffset, segmentDataOffset_get);
        __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(__privateGet(this, _seekHead)));
        __privateGet(this, _writer).writeEBML(__privateGet(this, _seekHead));
        __privateGet(this, _writer).seek(endPos);
      }
      __privateMethod(this, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn).call(this);
      __privateGet(this, _writer).finalize();
      __privateSet(this, _finalized, true);
    }
  };
  _options = new WeakMap();
  _writer = new WeakMap();
  _segment = new WeakMap();
  _segmentInfo = new WeakMap();
  _seekHead = new WeakMap();
  _tracksElement = new WeakMap();
  _segmentDuration = new WeakMap();
  _colourElement = new WeakMap();
  _videoCodecPrivate = new WeakMap();
  _audioCodecPrivate = new WeakMap();
  _subtitleCodecPrivate = new WeakMap();
  _cues = new WeakMap();
  _currentCluster = new WeakMap();
  _currentClusterTimestamp = new WeakMap();
  _duration = new WeakMap();
  _videoChunkQueue = new WeakMap();
  _audioChunkQueue = new WeakMap();
  _subtitleChunkQueue = new WeakMap();
  _firstVideoTimestamp = new WeakMap();
  _firstAudioTimestamp = new WeakMap();
  _lastVideoTimestamp = new WeakMap();
  _lastAudioTimestamp = new WeakMap();
  _lastSubtitleTimestamp = new WeakMap();
  _colorSpace = new WeakMap();
  _finalized = new WeakMap();
  _validateOptions = new WeakSet();
  validateOptions_fn = function(options) {
    if (typeof options !== "object") {
      throw new TypeError("The muxer requires an options object to be passed to its constructor.");
    }
    if (!(options.target instanceof Target)) {
      throw new TypeError("The target must be provided and an instance of Target.");
    }
    if (options.video) {
      if (typeof options.video.codec !== "string") {
        throw new TypeError(`Invalid video codec: ${options.video.codec}. Must be a string.`);
      }
      if (!Number.isInteger(options.video.width) || options.video.width <= 0) {
        throw new TypeError(`Invalid video width: ${options.video.width}. Must be a positive integer.`);
      }
      if (!Number.isInteger(options.video.height) || options.video.height <= 0) {
        throw new TypeError(`Invalid video height: ${options.video.height}. Must be a positive integer.`);
      }
      if (options.video.frameRate !== void 0) {
        if (!Number.isFinite(options.video.frameRate) || options.video.frameRate <= 0) {
          throw new TypeError(
            `Invalid video frame rate: ${options.video.frameRate}. Must be a positive number.`
          );
        }
      }
      if (options.video.alpha !== void 0 && typeof options.video.alpha !== "boolean") {
        throw new TypeError(`Invalid video alpha: ${options.video.alpha}. Must be a boolean.`);
      }
    }
    if (options.audio) {
      if (typeof options.audio.codec !== "string") {
        throw new TypeError(`Invalid audio codec: ${options.audio.codec}. Must be a string.`);
      }
      if (!Number.isInteger(options.audio.numberOfChannels) || options.audio.numberOfChannels <= 0) {
        throw new TypeError(
          `Invalid number of audio channels: ${options.audio.numberOfChannels}. Must be a positive integer.`
        );
      }
      if (!Number.isInteger(options.audio.sampleRate) || options.audio.sampleRate <= 0) {
        throw new TypeError(
          `Invalid audio sample rate: ${options.audio.sampleRate}. Must be a positive integer.`
        );
      }
      if (options.audio.bitDepth !== void 0) {
        if (!Number.isInteger(options.audio.bitDepth) || options.audio.bitDepth <= 0) {
          throw new TypeError(
            `Invalid audio bit depth: ${options.audio.bitDepth}. Must be a positive integer.`
          );
        }
      }
    }
    if (options.subtitles) {
      if (typeof options.subtitles.codec !== "string") {
        throw new TypeError(`Invalid subtitles codec: ${options.subtitles.codec}. Must be a string.`);
      }
    }
    if (options.type !== void 0 && !["webm", "matroska"].includes(options.type)) {
      throw new TypeError(`Invalid type: ${options.type}. Must be 'webm' or 'matroska'.`);
    }
    if (options.firstTimestampBehavior && !FIRST_TIMESTAMP_BEHAVIORS.includes(options.firstTimestampBehavior)) {
      throw new TypeError(`Invalid first timestamp behavior: ${options.firstTimestampBehavior}`);
    }
    if (options.streaming !== void 0 && typeof options.streaming !== "boolean") {
      throw new TypeError(`Invalid streaming option: ${options.streaming}. Must be a boolean.`);
    }
  };
  _createFileHeader = new WeakSet();
  createFileHeader_fn = function() {
    if (__privateGet(this, _writer) instanceof BaseStreamTargetWriter && __privateGet(this, _writer).target.options.onHeader) {
      __privateGet(this, _writer).startTrackingWrites();
    }
    __privateMethod(this, _writeEBMLHeader, writeEBMLHeader_fn).call(this);
    if (!__privateGet(this, _options).streaming) {
      __privateMethod(this, _createSeekHead, createSeekHead_fn).call(this);
    }
    __privateMethod(this, _createSegmentInfo, createSegmentInfo_fn).call(this);
    __privateMethod(this, _createCodecPrivatePlaceholders, createCodecPrivatePlaceholders_fn).call(this);
    __privateMethod(this, _createColourElement, createColourElement_fn).call(this);
    if (!__privateGet(this, _options).streaming) {
      __privateMethod(this, _createTracks, createTracks_fn).call(this);
      __privateMethod(this, _createSegment, createSegment_fn).call(this);
    } else {
    }
    __privateMethod(this, _createCues, createCues_fn).call(this);
    __privateMethod(this, _maybeFlushStreamingTargetWriter, maybeFlushStreamingTargetWriter_fn).call(this);
  };
  _writeEBMLHeader = new WeakSet();
  writeEBMLHeader_fn = function() {
    let ebmlHeader = { id: 440786851 /* EBML */, data: [
      { id: 17030 /* EBMLVersion */, data: 1 },
      { id: 17143 /* EBMLReadVersion */, data: 1 },
      { id: 17138 /* EBMLMaxIDLength */, data: 4 },
      { id: 17139 /* EBMLMaxSizeLength */, data: 8 },
      { id: 17026 /* DocType */, data: __privateGet(this, _options).type ?? "webm" },
      { id: 17031 /* DocTypeVersion */, data: 2 },
      { id: 17029 /* DocTypeReadVersion */, data: 2 }
    ] };
    __privateGet(this, _writer).writeEBML(ebmlHeader);
  };
  _createCodecPrivatePlaceholders = new WeakSet();
  createCodecPrivatePlaceholders_fn = function() {
    __privateSet(this, _videoCodecPrivate, { id: 236 /* Void */, size: 4, data: new Uint8Array(CODEC_PRIVATE_MAX_SIZE) });
    __privateSet(this, _audioCodecPrivate, { id: 236 /* Void */, size: 4, data: new Uint8Array(CODEC_PRIVATE_MAX_SIZE) });
    __privateSet(this, _subtitleCodecPrivate, { id: 236 /* Void */, size: 4, data: new Uint8Array(CODEC_PRIVATE_MAX_SIZE) });
  };
  _createColourElement = new WeakSet();
  createColourElement_fn = function() {
    __privateSet(this, _colourElement, { id: 21936 /* Colour */, data: [
      { id: 21937 /* MatrixCoefficients */, data: 2 },
      { id: 21946 /* TransferCharacteristics */, data: 2 },
      { id: 21947 /* Primaries */, data: 2 },
      { id: 21945 /* Range */, data: 0 }
    ] });
  };
  _createSeekHead = new WeakSet();
  createSeekHead_fn = function() {
    const kaxCues = new Uint8Array([28, 83, 187, 107]);
    const kaxInfo = new Uint8Array([21, 73, 169, 102]);
    const kaxTracks = new Uint8Array([22, 84, 174, 107]);
    let seekHead = { id: 290298740 /* SeekHead */, data: [
      { id: 19899 /* Seek */, data: [
        { id: 21419 /* SeekID */, data: kaxCues },
        { id: 21420 /* SeekPosition */, size: 5, data: 0 }
      ] },
      { id: 19899 /* Seek */, data: [
        { id: 21419 /* SeekID */, data: kaxInfo },
        { id: 21420 /* SeekPosition */, size: 5, data: 0 }
      ] },
      { id: 19899 /* Seek */, data: [
        { id: 21419 /* SeekID */, data: kaxTracks },
        { id: 21420 /* SeekPosition */, size: 5, data: 0 }
      ] }
    ] };
    __privateSet(this, _seekHead, seekHead);
  };
  _createSegmentInfo = new WeakSet();
  createSegmentInfo_fn = function() {
    let segmentDuration = { id: 17545 /* Duration */, data: new EBMLFloat64(0) };
    __privateSet(this, _segmentDuration, segmentDuration);
    let segmentInfo = { id: 357149030 /* Info */, data: [
      { id: 2807729 /* TimestampScale */, data: 1e6 },
      { id: 19840 /* MuxingApp */, data: APP_NAME },
      { id: 22337 /* WritingApp */, data: APP_NAME },
      !__privateGet(this, _options).streaming ? segmentDuration : null
    ] };
    __privateSet(this, _segmentInfo, segmentInfo);
  };
  _createTracks = new WeakSet();
  createTracks_fn = function() {
    let tracksElement = { id: 374648427 /* Tracks */, data: [] };
    __privateSet(this, _tracksElement, tracksElement);
    if (__privateGet(this, _options).video) {
      tracksElement.data.push({ id: 174 /* TrackEntry */, data: [
        { id: 215 /* TrackNumber */, data: VIDEO_TRACK_NUMBER },
        { id: 29637 /* TrackUID */, data: VIDEO_TRACK_NUMBER },
        { id: 131 /* TrackType */, data: VIDEO_TRACK_TYPE },
        { id: 134 /* CodecID */, data: __privateGet(this, _options).video.codec },
        __privateGet(this, _videoCodecPrivate),
        __privateGet(this, _options).video.frameRate ? { id: 2352003 /* DefaultDuration */, data: 1e9 / __privateGet(this, _options).video.frameRate } : null,
        { id: 224 /* Video */, data: [
          { id: 176 /* PixelWidth */, data: __privateGet(this, _options).video.width },
          { id: 186 /* PixelHeight */, data: __privateGet(this, _options).video.height },
          __privateGet(this, _options).video.alpha ? { id: 21440 /* AlphaMode */, data: 1 } : null,
          __privateGet(this, _colourElement)
        ] }
      ] });
    }
    if (__privateGet(this, _options).audio) {
      __privateSet(this, _audioCodecPrivate, __privateGet(this, _options).streaming ? __privateGet(this, _audioCodecPrivate) || null : { id: 236 /* Void */, size: 4, data: new Uint8Array(CODEC_PRIVATE_MAX_SIZE) });
      tracksElement.data.push({ id: 174 /* TrackEntry */, data: [
        { id: 215 /* TrackNumber */, data: AUDIO_TRACK_NUMBER },
        { id: 29637 /* TrackUID */, data: AUDIO_TRACK_NUMBER },
        { id: 131 /* TrackType */, data: AUDIO_TRACK_TYPE },
        { id: 134 /* CodecID */, data: __privateGet(this, _options).audio.codec },
        __privateGet(this, _audioCodecPrivate),
        { id: 225 /* Audio */, data: [
          { id: 181 /* SamplingFrequency */, data: new EBMLFloat32(__privateGet(this, _options).audio.sampleRate) },
          { id: 159 /* Channels */, data: __privateGet(this, _options).audio.numberOfChannels },
          __privateGet(this, _options).audio.bitDepth ? { id: 25188 /* BitDepth */, data: __privateGet(this, _options).audio.bitDepth } : null
        ] }
      ] });
    }
    if (__privateGet(this, _options).subtitles) {
      tracksElement.data.push({ id: 174 /* TrackEntry */, data: [
        { id: 215 /* TrackNumber */, data: SUBTITLE_TRACK_NUMBER },
        { id: 29637 /* TrackUID */, data: SUBTITLE_TRACK_NUMBER },
        { id: 131 /* TrackType */, data: SUBTITLE_TRACK_TYPE },
        { id: 134 /* CodecID */, data: __privateGet(this, _options).subtitles.codec },
        __privateGet(this, _subtitleCodecPrivate)
      ] });
    }
  };
  _createSegment = new WeakSet();
  createSegment_fn = function() {
    let segment = {
      id: 408125543 /* Segment */,
      size: __privateGet(this, _options).streaming ? -1 : SEGMENT_SIZE_BYTES,
      data: [
        !__privateGet(this, _options).streaming ? __privateGet(this, _seekHead) : null,
        __privateGet(this, _segmentInfo),
        __privateGet(this, _tracksElement)
      ]
    };
    __privateSet(this, _segment, segment);
    __privateGet(this, _writer).writeEBML(segment);
    if (__privateGet(this, _writer) instanceof BaseStreamTargetWriter && __privateGet(this, _writer).target.options.onHeader) {
      let { data, start } = __privateGet(this, _writer).getTrackedWrites();
      __privateGet(this, _writer).target.options.onHeader(data, start);
    }
  };
  _createCues = new WeakSet();
  createCues_fn = function() {
    __privateSet(this, _cues, { id: 475249515 /* Cues */, data: [] });
  };
  _maybeFlushStreamingTargetWriter = new WeakSet();
  maybeFlushStreamingTargetWriter_fn = function() {
    if (__privateGet(this, _writer) instanceof StreamTargetWriter) {
      __privateGet(this, _writer).flush();
    }
  };
  _segmentDataOffset = new WeakSet();
  segmentDataOffset_get = function() {
    return __privateGet(this, _writer).dataOffsets.get(__privateGet(this, _segment));
  };
  _writeVideoDecoderConfig = new WeakSet();
  writeVideoDecoderConfig_fn = function(meta) {
    if (!meta.decoderConfig)
      return;
    if (meta.decoderConfig.colorSpace) {
      let colorSpace = meta.decoderConfig.colorSpace;
      __privateSet(this, _colorSpace, colorSpace);
      __privateGet(this, _colourElement).data = [
        { id: 21937 /* MatrixCoefficients */, data: {
          "rgb": 1,
          "bt709": 1,
          "bt470bg": 5,
          "smpte170m": 6
        }[colorSpace.matrix] },
        { id: 21946 /* TransferCharacteristics */, data: {
          "bt709": 1,
          "smpte170m": 6,
          "iec61966-2-1": 13
        }[colorSpace.transfer] },
        { id: 21947 /* Primaries */, data: {
          "bt709": 1,
          "bt470bg": 5,
          "smpte170m": 6
        }[colorSpace.primaries] },
        { id: 21945 /* Range */, data: [1, 2][Number(colorSpace.fullRange)] }
      ];
      if (!__privateGet(this, _options).streaming) {
        let endPos = __privateGet(this, _writer).pos;
        __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(__privateGet(this, _colourElement)));
        __privateGet(this, _writer).writeEBML(__privateGet(this, _colourElement));
        __privateGet(this, _writer).seek(endPos);
      }
    }
    if (meta.decoderConfig.description) {
      if (__privateGet(this, _options).streaming) {
        __privateSet(this, _videoCodecPrivate, __privateMethod(this, _createCodecPrivateElement, createCodecPrivateElement_fn).call(this, meta.decoderConfig.description));
      } else {
        __privateMethod(this, _writeCodecPrivate, writeCodecPrivate_fn).call(this, __privateGet(this, _videoCodecPrivate), meta.decoderConfig.description);
      }
    }
  };
  _fixVP9ColorSpace = new WeakSet();
  fixVP9ColorSpace_fn = function(chunk) {
    if (chunk.type !== "key")
      return;
    if (!__privateGet(this, _colorSpace))
      return;
    let i = 0;
    if (readBits(chunk.data, 0, 2) !== 2)
      return;
    i += 2;
    let profile = (readBits(chunk.data, i + 1, i + 2) << 1) + readBits(chunk.data, i + 0, i + 1);
    i += 2;
    if (profile === 3)
      i++;
    let showExistingFrame = readBits(chunk.data, i + 0, i + 1);
    i++;
    if (showExistingFrame)
      return;
    let frameType = readBits(chunk.data, i + 0, i + 1);
    i++;
    if (frameType !== 0)
      return;
    i += 2;
    let syncCode = readBits(chunk.data, i + 0, i + 24);
    i += 24;
    if (syncCode !== 4817730)
      return;
    if (profile >= 2)
      i++;
    let colorSpaceID = {
      "rgb": 7,
      "bt709": 2,
      "bt470bg": 1,
      "smpte170m": 3
    }[__privateGet(this, _colorSpace).matrix];
    writeBits(chunk.data, i + 0, i + 3, colorSpaceID);
  };
  _writeSubtitleChunks = new WeakSet();
  writeSubtitleChunks_fn = function() {
    let lastWrittenMediaTimestamp = Math.min(
      __privateGet(this, _options).video ? __privateGet(this, _lastVideoTimestamp) : Infinity,
      __privateGet(this, _options).audio ? __privateGet(this, _lastAudioTimestamp) : Infinity
    );
    let queue = __privateGet(this, _subtitleChunkQueue);
    while (queue.length > 0 && queue[0].timestamp <= lastWrittenMediaTimestamp) {
      __privateMethod(this, _writeBlock, writeBlock_fn).call(this, queue.shift(), !__privateGet(this, _options).video && !__privateGet(this, _options).audio);
    }
  };
  _createInternalChunk = new WeakSet();
  createInternalChunk_fn = function(data, type, timestamp, trackNumber, duration, additions) {
    let adjustedTimestamp = __privateMethod(this, _validateTimestamp, validateTimestamp_fn).call(this, timestamp, trackNumber);
    let internalChunk = {
      data,
      additions,
      type,
      timestamp: adjustedTimestamp,
      duration,
      trackNumber
    };
    return internalChunk;
  };
  _validateTimestamp = new WeakSet();
  validateTimestamp_fn = function(timestamp, trackNumber) {
    let lastTimestamp = trackNumber === VIDEO_TRACK_NUMBER ? __privateGet(this, _lastVideoTimestamp) : trackNumber === AUDIO_TRACK_NUMBER ? __privateGet(this, _lastAudioTimestamp) : __privateGet(this, _lastSubtitleTimestamp);
    if (trackNumber !== SUBTITLE_TRACK_NUMBER) {
      let firstTimestamp = trackNumber === VIDEO_TRACK_NUMBER ? __privateGet(this, _firstVideoTimestamp) : __privateGet(this, _firstAudioTimestamp);
      if (__privateGet(this, _options).firstTimestampBehavior === "strict" && lastTimestamp === -1 && timestamp !== 0) {
        throw new Error(
          `The first chunk for your media track must have a timestamp of 0 (received ${timestamp}). Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of the document, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
If you want to allow non-zero first timestamps, set firstTimestampBehavior: 'permissive'.
`
        );
      } else if (__privateGet(this, _options).firstTimestampBehavior === "offset") {
        timestamp -= firstTimestamp;
      }
    }
    if (timestamp < lastTimestamp) {
      throw new Error(
        `Timestamps must be monotonically increasing (went from ${lastTimestamp} to ${timestamp}).`
      );
    }
    if (timestamp < 0) {
      throw new Error(`Timestamps must be non-negative (received ${timestamp}).`);
    }
    return timestamp;
  };
  _writeBlock = new WeakSet();
  writeBlock_fn = function(chunk, canCreateNewCluster) {
    if (__privateGet(this, _options).streaming && !__privateGet(this, _tracksElement)) {
      __privateMethod(this, _createTracks, createTracks_fn).call(this);
      __privateMethod(this, _createSegment, createSegment_fn).call(this);
    }
    let msTimestamp = Math.floor(chunk.timestamp / 1e3);
    let relativeTimestamp = msTimestamp - __privateGet(this, _currentClusterTimestamp);
    let shouldCreateNewClusterFromKeyFrame = canCreateNewCluster && chunk.type === "key" && relativeTimestamp >= 1e3;
    let clusterWouldBeTooLong = relativeTimestamp >= MAX_CHUNK_LENGTH_MS;
    if (!__privateGet(this, _currentCluster) || shouldCreateNewClusterFromKeyFrame || clusterWouldBeTooLong) {
      __privateMethod(this, _createNewCluster, createNewCluster_fn).call(this, msTimestamp);
      relativeTimestamp = 0;
    }
    if (relativeTimestamp < 0) {
      return;
    }
    let prelude = new Uint8Array(4);
    let view = new DataView(prelude.buffer);
    view.setUint8(0, 128 | chunk.trackNumber);
    view.setInt16(1, relativeTimestamp, false);
    if (chunk.duration === void 0 && !chunk.additions) {
      view.setUint8(3, Number(chunk.type === "key") << 7);
      let simpleBlock = { id: 163 /* SimpleBlock */, data: [
        prelude,
        chunk.data
      ] };
      __privateGet(this, _writer).writeEBML(simpleBlock);
    } else {
      let msDuration = Math.floor(chunk.duration / 1e3);
      let blockGroup = { id: 160 /* BlockGroup */, data: [
        { id: 161 /* Block */, data: [
          prelude,
          chunk.data
        ] },
        chunk.duration !== void 0 ? { id: 155 /* BlockDuration */, data: msDuration } : null,
        chunk.additions ? { id: 30113 /* BlockAdditions */, data: chunk.additions } : null
      ] };
      __privateGet(this, _writer).writeEBML(blockGroup);
    }
    __privateSet(this, _duration, Math.max(__privateGet(this, _duration), msTimestamp));
  };
  _createCodecPrivateElement = new WeakSet();
  createCodecPrivateElement_fn = function(data) {
    return { id: 25506 /* CodecPrivate */, size: 4, data: new Uint8Array(data) };
  };
  _writeCodecPrivate = new WeakSet();
  writeCodecPrivate_fn = function(element, data) {
    let endPos = __privateGet(this, _writer).pos;
    __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(element));
    let codecPrivateElementSize = 2 + 4 + data.byteLength;
    let voidDataSize = CODEC_PRIVATE_MAX_SIZE - codecPrivateElementSize;
    if (voidDataSize < 0) {
      let newByteLength = data.byteLength + voidDataSize;
      if (data instanceof ArrayBuffer) {
        data = data.slice(0, newByteLength);
      } else {
        data = data.buffer.slice(0, newByteLength);
      }
      voidDataSize = 0;
    }
    element = [
      __privateMethod(this, _createCodecPrivateElement, createCodecPrivateElement_fn).call(this, data),
      { id: 236 /* Void */, size: 4, data: new Uint8Array(voidDataSize) }
    ];
    __privateGet(this, _writer).writeEBML(element);
    __privateGet(this, _writer).seek(endPos);
  };
  _createNewCluster = new WeakSet();
  createNewCluster_fn = function(timestamp) {
    if (__privateGet(this, _currentCluster)) {
      __privateMethod(this, _finalizeCurrentCluster, finalizeCurrentCluster_fn).call(this);
    }
    if (__privateGet(this, _writer) instanceof BaseStreamTargetWriter && __privateGet(this, _writer).target.options.onCluster) {
      __privateGet(this, _writer).startTrackingWrites();
    }
    __privateSet(this, _currentCluster, {
      id: 524531317 /* Cluster */,
      size: __privateGet(this, _options).streaming ? -1 : CLUSTER_SIZE_BYTES,
      data: [
        { id: 231 /* Timestamp */, data: timestamp }
      ]
    });
    __privateGet(this, _writer).writeEBML(__privateGet(this, _currentCluster));
    __privateSet(this, _currentClusterTimestamp, timestamp);
    let clusterOffsetFromSegment = __privateGet(this, _writer).offsets.get(__privateGet(this, _currentCluster)) - __privateGet(this, _segmentDataOffset, segmentDataOffset_get);
    __privateGet(this, _cues).data.push({ id: 187 /* CuePoint */, data: [
      { id: 179 /* CueTime */, data: timestamp },
      __privateGet(this, _options).video ? { id: 183 /* CueTrackPositions */, data: [
        { id: 247 /* CueTrack */, data: VIDEO_TRACK_NUMBER },
        { id: 241 /* CueClusterPosition */, data: clusterOffsetFromSegment }
      ] } : null,
      __privateGet(this, _options).audio ? { id: 183 /* CueTrackPositions */, data: [
        { id: 247 /* CueTrack */, data: AUDIO_TRACK_NUMBER },
        { id: 241 /* CueClusterPosition */, data: clusterOffsetFromSegment }
      ] } : null
    ] });
  };
  _finalizeCurrentCluster = new WeakSet();
  finalizeCurrentCluster_fn = function() {
    if (!__privateGet(this, _options).streaming) {
      let clusterSize = __privateGet(this, _writer).pos - __privateGet(this, _writer).dataOffsets.get(__privateGet(this, _currentCluster));
      let endPos = __privateGet(this, _writer).pos;
      __privateGet(this, _writer).seek(__privateGet(this, _writer).offsets.get(__privateGet(this, _currentCluster)) + 4);
      __privateGet(this, _writer).writeEBMLVarInt(clusterSize, CLUSTER_SIZE_BYTES);
      __privateGet(this, _writer).seek(endPos);
    }
    if (__privateGet(this, _writer) instanceof BaseStreamTargetWriter && __privateGet(this, _writer).target.options.onCluster) {
      let { data, start } = __privateGet(this, _writer).getTrackedWrites();
      __privateGet(this, _writer).target.options.onCluster(data, start, __privateGet(this, _currentClusterTimestamp));
    }
  };
  _ensureNotFinalized = new WeakSet();
  ensureNotFinalized_fn = function() {
    if (__privateGet(this, _finalized)) {
      throw new Error("Cannot add new video or audio chunks after the file has been finalized.");
    }
  };

  // src/subtitles.ts
  var cueBlockHeaderRegex = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g;
  var preambleStartRegex = /^WEBVTT.*?\n{2}/;
  var timestampRegex = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/;
  var inlineTimestampRegex = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
  var textEncoder = new TextEncoder();
  var _options2, _config, _preambleSeen, _preambleBytes, _preambleEmitted, _parseTimestamp, parseTimestamp_fn, _formatTimestamp, formatTimestamp_fn;
  var SubtitleEncoder = class {
    constructor(options) {
      __privateAdd(this, _parseTimestamp);
      __privateAdd(this, _formatTimestamp);
      __privateAdd(this, _options2, void 0);
      __privateAdd(this, _config, void 0);
      __privateAdd(this, _preambleSeen, false);
      __privateAdd(this, _preambleBytes, void 0);
      __privateAdd(this, _preambleEmitted, false);
      __privateSet(this, _options2, options);
    }
    configure(config) {
      if (config.codec !== "webvtt") {
        throw new Error("Codec must be 'webvtt'.");
      }
      __privateSet(this, _config, config);
    }
    encode(text) {
      if (!__privateGet(this, _config)) {
        throw new Error("Encoder not configured.");
      }
      text = text.replace("\r\n", "\n").replace("\r", "\n");
      cueBlockHeaderRegex.lastIndex = 0;
      let match;
      if (!__privateGet(this, _preambleSeen)) {
        if (!preambleStartRegex.test(text)) {
          let error = new Error("WebVTT preamble incorrect.");
          __privateGet(this, _options2).error(error);
          throw error;
        }
        match = cueBlockHeaderRegex.exec(text);
        let preamble = text.slice(0, match?.index ?? text.length).trimEnd();
        if (!preamble) {
          let error = new Error("No WebVTT preamble provided.");
          __privateGet(this, _options2).error(error);
          throw error;
        }
        __privateSet(this, _preambleBytes, textEncoder.encode(preamble));
        __privateSet(this, _preambleSeen, true);
        if (match) {
          text = text.slice(match.index);
          cueBlockHeaderRegex.lastIndex = 0;
        }
      }
      while (match = cueBlockHeaderRegex.exec(text)) {
        let notes = text.slice(0, match.index);
        let cueIdentifier = match[1] || "";
        let matchEnd = match.index + match[0].length;
        let bodyStart = text.indexOf("\n", matchEnd) + 1;
        let cueSettings = text.slice(matchEnd, bodyStart).trim();
        let bodyEnd = text.indexOf("\n\n", matchEnd);
        if (bodyEnd === -1)
          bodyEnd = text.length;
        let startTime = __privateMethod(this, _parseTimestamp, parseTimestamp_fn).call(this, match[2]);
        let endTime = __privateMethod(this, _parseTimestamp, parseTimestamp_fn).call(this, match[3]);
        let duration = endTime - startTime;
        let body = text.slice(bodyStart, bodyEnd);
        let additions = `${cueSettings}
${cueIdentifier}
${notes}`;
        inlineTimestampRegex.lastIndex = 0;
        body = body.replace(inlineTimestampRegex, (match2) => {
          let time = __privateMethod(this, _parseTimestamp, parseTimestamp_fn).call(this, match2.slice(1, -1));
          let offsetTime = time - startTime;
          return `<${__privateMethod(this, _formatTimestamp, formatTimestamp_fn).call(this, offsetTime)}>`;
        });
        text = text.slice(bodyEnd).trimStart();
        cueBlockHeaderRegex.lastIndex = 0;
        let chunk = {
          body: textEncoder.encode(body),
          additions: additions.trim() === "" ? void 0 : textEncoder.encode(additions),
          timestamp: startTime * 1e3,
          duration: duration * 1e3
        };
        let meta = {};
        if (!__privateGet(this, _preambleEmitted)) {
          meta.decoderConfig = {
            description: __privateGet(this, _preambleBytes)
          };
          __privateSet(this, _preambleEmitted, true);
        }
        __privateGet(this, _options2).output(chunk, meta);
      }
    }
  };
  _options2 = new WeakMap();
  _config = new WeakMap();
  _preambleSeen = new WeakMap();
  _preambleBytes = new WeakMap();
  _preambleEmitted = new WeakMap();
  _parseTimestamp = new WeakSet();
  parseTimestamp_fn = function(string) {
    let match = timestampRegex.exec(string);
    if (!match)
      throw new Error("Expected match.");
    return 60 * 60 * 1e3 * Number(match[1] || "0") + 60 * 1e3 * Number(match[2]) + 1e3 * Number(match[3]) + Number(match[4]);
  };
  _formatTimestamp = new WeakSet();
  formatTimestamp_fn = function(timestamp) {
    let hours = Math.floor(timestamp / (60 * 60 * 1e3));
    let minutes = Math.floor(timestamp % (60 * 60 * 1e3) / (60 * 1e3));
    let seconds = Math.floor(timestamp % (60 * 1e3) / 1e3);
    let milliseconds = timestamp % 1e3;
    return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + "." + milliseconds.toString().padStart(3, "0");
  };
  return __toCommonJS(src_exports);
})();
if (typeof module === "object" && typeof module.exports === "object") Object.assign(module.exports, WebMMuxer)

// ===================== core: math, easing, world geometry =====================
let W = 1920, H = 1080; const FPS = 60, DUR = 30; let VERTICAL = false, VZOOM = 1.3; // W/H change for 9:16 (OopsOwl.film({ aspect: '9:16' }))
const pick = (wide, tall) => VERTICAL ? tall : wide; // choose a value per aspect, e.g. a camera
const G = 2400, WR = 42, WB = 230;
const RAMP_X0 = 1110, LIP_X = 1340, LIP_H = 100;
const POND_X0 = 1560, POND_X1 = 2060, WATER_Y = 794;
const TREE_X = 2500, MREF_X = 1985;

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, u) => a + (b - a) * u;
const sstep = (a, b, x) => { const u = clamp((x - a) / (b - a)); return u * u * (3 - 2 * u); };
const expoOut = u => u <= 0 ? 0 : u >= 1 ? 1 : 1 - Math.pow(2, -10 * u);
const expoIn = u => u <= 0 ? 0 : u >= 1 ? 1 : Math.pow(2, 10 * (u - 1)) - 0.0009765625 * (1 - u);
const expoInOut = u => u <= 0 ? 0 : u >= 1 ? 1 : (u < .5 ? Math.pow(2, 20 * u - 10) / 2 : (2 - Math.pow(2, -20 * u + 10)) / 2);
const quadIn = u => clamp(u) * clamp(u);
const quadOut = u => { u = clamp(u); return 1 - (1 - u) * (1 - u); };
const sineInOut = u => { u = clamp(u); return (1 - Math.cos(Math.PI * u)) / 2; };

// damped-spring step response, 0 -> 1, stateless function of time since key
function spring(t, w = 14, z = 0.5) {
  if (t <= 0) return 0;
  if (z >= 1) return 1 - Math.exp(-w * t) * (1 + w * t);
  const wd = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
}
// keyed spring track: [[t, v, w, z], ...]  value springs from previous target to v starting at t
function trk(t, keys) {
  let v = keys[0][1];
  for (let i = 1; i < keys.length; i++) { const k = keys[i]; v += (k[1] - keys[i - 1][1]) * spring(t - k[0], k[2] || 14, k[3] == null ? 0.5 : k[3]); }
  return v;
}
// keyed eased tween: [[t, v, dur, ease], ...]
function tw(t, keys) {
  let v = keys[0][1];
  for (let i = 1; i < keys.length; i++) { const k = keys[i]; const d = k[2] || 0.3, e = k[3] || expoInOut; v += (k[1] - keys[i - 1][1]) * e(clamp((t - k[0]) / d)); }
  return v;
}
// impulse-like decaying wobble
const wobble = (t, f, k) => t <= 0 ? 0 : Math.sin(2 * Math.PI * f * t) * Math.exp(-k * t);

function mulberry(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function hash2(i, j, s = 0) { let h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 1442695041); h = Math.imul(h ^ (h >>> 13), 1274126177); h = h ^ (h >>> 16); return (h >>> 0) / 4294967296; }
function vnoise(x, y, s = 0) { const i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j; const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy); const a = hash2(i, j, s), b = hash2(i + 1, j, s), c = hash2(i, j + 1, s), d = hash2(i + 1, j + 1, s); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }
function fbm(x, y, s = 0, o = 4) { let f = 0, a = 0.5, fr = 1, n = 0; for (let k = 0; k < o; k++) { f += a * vnoise(x * fr, y * fr, s + k * 17); n += a; fr *= 2; a *= 0.5; } return f / n; }

// ---------- terrain ----------
function groundY(x) {
  if (x < 540) return 560;
  if (x < 1100) { const u = (x - 540) / 560; return 560 + 210 * (1 - Math.cos(Math.PI * u)) / 2; }
  if (x < POND_X0 - 50) return 770;
  if (x < POND_X0) return 770 + 40 * sstep(POND_X0 - 50, POND_X0, x);
  if (x < POND_X1) return 810;
  if (x < POND_X1 + 40) return 810 - 36 * sstep(POND_X1, POND_X1 + 40, x);
  if (x < 2650) return 774 - 22 * (x - (POND_X1 + 40)) / (2650 - POND_X1 - 40);
  return 752 - 70 * sstep(2650, 3300, x);
}
function rampY(x) { const u = clamp((x - RAMP_X0) / (LIP_X - RAMP_X0)); return 770 - LIP_H * Math.pow(u, 1.45); }
function surf(x) { let y = groundY(x); if (x >= RAMP_X0 && x <= LIP_X) y = Math.min(y, rampY(x)); return y; }
// visible top edge of the ground layer (far bank inside pond)
function edgeY(x) {
  if (x > POND_X0 - 6 && x < POND_X1 + 6) return 779 - 3 * Math.sin(Math.PI * (x - POND_X0) / (POND_X1 - POND_X0));
  return groundY(x);
}
function pondTop(x) { const u = (x - POND_X0) / (POND_X1 - POND_X0); return 780 - 3 * Math.sin(Math.PI * clamp(u)); }
function pondBot(x) { const u = clamp((x - POND_X0) / (POND_X1 - POND_X0)); return 781 + 36 * Math.pow(Math.sin(Math.PI * u), 0.5); }

const AX0 = -300, AX1 = 3300;
const ARC = new Float64Array((AX1 - AX0) * 2 + 1);
(function () { let s = 0; ARC[0] = 0; for (let i = 1; i < ARC.length; i++) { const x0 = AX0 + (i - 1) / 2, x1 = AX0 + i / 2; let dy = surf(x1) - surf(x0); if (Math.abs(dy) > 20) dy = 0; s += Math.hypot(0.5, dy); ARC[i] = s; } })();
function arcAt(x) { const f = (x - AX0) * 2; const i = Math.floor(clamp(f, 0, ARC.length - 2)); return ARC[i] + (ARC[i + 1] - ARC[i]) * (f - i); }
function xAtArc(s) { let lo = 0, hi = ARC.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (ARC[m] < s) lo = m; else hi = m; } const f = lo + (s - ARC[lo]) / ((ARC[hi] - ARC[lo]) || 1); return AX0 + f / 2; }
function slope(x) { return surf(x + 0.5) - surf(x - 0.5); }
function axleAt(x) { const d = slope(x); const n = Math.hypot(1, d); return { x: x + WR * d / n, y: surf(x) - WR / n }; }
const LIPA = axleAt(LIP_X - 0.6), LIPANG = Math.atan(slope(LIP_X - 0.6));

// bike resting on ground with rear contact at xr. dir=+1 faces right.
function bikeGround(xr, dir = 1) {
  const R = axleAt(xr); let F;
  const distTo = x => { const a = axleAt(x); return Math.hypot(a.x - R.x, a.y - R.y) - WB; };
  if (dir > 0 && xr < LIP_X && Math.hypot(LIPA.x - R.x, LIPA.y - R.y) < WB) {
    const ux = Math.cos(LIPANG), uy = Math.sin(LIPANG); const wx = LIPA.x - R.x, wy = LIPA.y - R.y;
    const b = wx * ux + wy * uy; const s = -b + Math.sqrt(Math.max(0, b * b - (wx * wx + wy * wy) + WB * WB));
    F = { x: LIPA.x + s * ux, y: LIPA.y + s * uy };
  } else {
    let lo = xr + dir * WB * 0.6, hi = xr + dir * WB * 1.02;
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (distTo(m) < 0) lo = m; else hi = m; }
    F = axleAt((lo + hi) / 2);
  }
  const rot = dir * arcAt(xr) / WR;
  return { R, F, rotR: rot, rotF: rot + 0.7, dir, comp: 0, stand: 0, omega: 0 };
}
// solve launch speed so a projectile at angle th from A reaches (tx,ty)
function launchSpeed(A, th, tx, ty) { const dx = tx - A.x, dy = ty - A.y; const c = Math.cos(th); return Math.sqrt(0.5 * G * dx * dx / (c * c * (dx * Math.tan(-th) + dy))); }
function ik2(ax, ay, tx, ty, l1, l2, bend) {
  const dx = tx - ax, dy = ty - ay; let d = Math.hypot(dx, dy);
  d = clamp(d, Math.abs(l1 - l2) + 0.01, l1 + l2 - 0.01);
  const a = Math.atan2(dy, dx); const c = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
  const b = Math.acos(clamp(c, -1, 1)); const ang = a + bend * b;
  const ex = ax + l1 * Math.cos(ang), ey = ay + l1 * Math.sin(ang);
  const ea = Math.atan2(ty - ey, tx - ex);
  return { ex, ey, wx: ex + l2 * Math.cos(ea), wy: ey + l2 * Math.sin(ea) };
}
const rotP = (x, y, a) => ({ x: x * Math.cos(a) - y * Math.sin(a), y: x * Math.sin(a) + y * Math.cos(a) });

// ===================== prerendered static art (built once, never mutated) =====================
function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function hex(c) { const n = parseInt(c.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
function rgba(c, a) { const [r, g, b] = hex(c); return `rgba(${r},${g},${b},${a})`; }
function mixc(c1, c2, u) { const a = hex(c1), b = hex(c2); return `rgb(${Math.round(lerp(a[0], b[0], u))},${Math.round(lerp(a[1], b[1], u))},${Math.round(lerp(a[2], b[2], u))})`; }

const ART = {};

function buildSky() {
  const c = mk(W, H), x = c.getContext('2d');
  const id = x.createImageData(W, H), d = id.data;
  const bands = ['#0b1030', '#10173b', '#172049', '#1f2a58', '#2a3667', '#364275', '#43507f'].map(hex);
  for (let py = 0; py < H; py++) {
    for (let px = 0; px < W; px++) {
      const n = fbm(px * 0.004, py * 0.012, 3, 3) - 0.5;
      const f = clamp((py + n * 150) / H) * (bands.length - 1.001);
      const i = Math.floor(f), u = f - i;
      // dithered two-tone step instead of a smooth blend
      const th = hash2(px, py, 9) * 0.6 + 0.2;
      const a = bands[i], b = bands[Math.min(i + 1, bands.length - 1)];
      const pick = u > th ? b : a;
      const k = (hash2(px >> 1, py >> 1, 4) - 0.5) * 5;
      const o = (py * W + px) * 4; d[o] = pick[0] + k; d[o + 1] = pick[1] + k; d[o + 2] = pick[2] + k * 1.4; d[o + 3] = 255;
    }
  }
  x.putImageData(id, 0, 0);
  // brushed horizontal strokes
  const r = mulberry(11);
  for (let i = 0; i < 2600; i++) {
    const y = r() * H, xx = r() * W; const f = clamp(y / H) * 6;
    const col = ['#0e1436', '#141c45', '#1b2550', '#25305f', '#323e70', '#3e4a7b', '#4a5685'][Math.round(f)];
    x.fillStyle = rgba(col, 0.25); x.beginPath(); x.ellipse(xx, y, 40 + r() * 160, 1.5 + r() * 3, 0, 0, 7); x.fill();
  }
  // stars
  const rs = mulberry(5);
  for (let i = 0; i < 900; i++) {
    const sx = rs() * W, sy = Math.pow(rs(), 1.4) * H * 0.78; const big = rs();
    const s = big > 0.985 ? 2.2 : big > 0.9 ? 1.4 : 0.8 + rs() * 0.5;
    x.fillStyle = rs() > 0.8 ? `rgba(255,232,196,${0.5 + rs() * 0.5})` : `rgba(222,230,255,${0.35 + rs() * 0.6})`;
    x.fillRect(sx, sy, s, s);
  }
  ART.sky = c;
}

function buildClouds() {
  const c = mk(W * 1.5, H), x = c.getContext('2d');
  const r = mulberry(21);
  const bands = [[260, 230, 900, 0.9], [700, 105, 600, 0.6], [900, 560, 1300, 1.0], [2300, 470, 900, 0.8]];
  for (const [cx, cy, len, sc] of bands) {
    // shadow body, then lit top edge (moon is upper right)
    const blobs = []; for (let i = 0; i < 26; i++) { const u = i / 25; blobs.push([cx - len / 2 + u * len + (r() - .5) * 40, cy + Math.sin(u * 7 + cx) * 8 + (r() - .5) * 6, (16 + r() * 26) * sc * (0.5 + Math.sin(Math.PI * u))]); }
    x.fillStyle = '#4d5a8e'; for (const [bx, by, br] of blobs) { x.beginPath(); x.ellipse(bx + 3, by - 3, br * 2.2, br * 0.6, 0, 0, 7); x.fill(); }
    x.fillStyle = '#2a3462'; for (const [bx, by, br] of blobs) { x.beginPath(); x.ellipse(bx, by, br * 2.2, br * 0.6, 0, 0, 7); x.fill(); }
    x.fillStyle = '#222b55'; for (const [bx, by, br] of blobs) { x.beginPath(); x.ellipse(bx - 6, by + br * 0.25, br * 1.8, br * 0.35, 0, 0, 7); x.fill(); }
  }
  ART.clouds = c;
}

function buildMoon() {
  const S = 640, R = 300, c = mk(S, S), x = c.getContext('2d');
  const id = x.createImageData(S, S), d = id.data;
  const base = hex('#efe8d1'), mare = hex('#c9c0a6'), dark = hex('#b8af95');
  for (let py = 0; py < S; py++) for (let px = 0; px < S; px++) {
    const dx = px - S / 2, dy = py - S / 2, rr = Math.hypot(dx, dy); const o = (py * S + px) * 4;
    if (rr > R + 1) { d[o + 3] = 0; continue; }
    const n = fbm(px * 0.008, py * 0.008, 41, 5); const n2 = fbm(px * 0.03, py * 0.03, 7, 3);
    let col = base;
    const th = hash2(px, py, 2) * 0.08;
    if (n > 0.56 + th) col = mare; if (n > 0.66 + th) col = dark;
    const k = (n2 - 0.5) * 22;
    d[o] = col[0] + k; d[o + 1] = col[1] + k; d[o + 2] = col[2] + k * 0.9; d[o + 3] = rr > R ? 255 * (R + 1 - rr) : 255;
  }
  x.putImageData(id, 0, 0);
  const r = mulberry(9);
  x.save(); x.beginPath(); x.arc(S / 2, S / 2, R, 0, 7); x.clip();
  for (let i = 0; i < 26; i++) {
    const a = r() * 7, rad = Math.sqrt(r()) * R * 0.92, cr = 3 + Math.pow(r(), 2.5) * 22;
    const cx = S / 2 + Math.cos(a) * rad, cy = S / 2 + Math.sin(a) * rad;
    x.fillStyle = 'rgba(190,181,152,0.3)'; x.beginPath(); x.arc(cx, cy, cr, 0, 7); x.fill();
    x.strokeStyle = 'rgba(255,252,238,0.35)'; x.lineWidth = Math.max(1, cr * 0.14); x.beginPath(); x.arc(cx, cy, cr, -2.4, 0.6); x.stroke();
    x.strokeStyle = 'rgba(160,150,124,0.35)'; x.beginPath(); x.arc(cx, cy, cr * 0.92, 0.9, 3.6); x.stroke();
  }
  x.restore();
  x.strokeStyle = '#d3cab0'; x.lineWidth = 5; x.beginPath(); x.arc(S / 2, S / 2, R - 2, 0, 7); x.stroke();
  ART.moon = c; ART.moonR = R;
}

// parallax layer: content authored in world coords at reference camera
const LAYER = { far: { f: 0.18, x0: -900, y0: 300, w: 4900, h: 800, s: 1 }, mid: { f: 0.42, x0: -900, y0: 300, w: 4900, h: 800, s: 1 } };
function buildHills() {
  for (const key of ['far', 'mid']) {
    const L = LAYER[key]; const c = mk(L.w * L.s, L.h * L.s), x = c.getContext('2d');
    x.scale(L.s, L.s); x.translate(-L.x0, -L.y0);
    const far = key === 'far';
    const ridge = X => far ? 500 - 150 * (fbm(X * 0.0011, 1, 3, 4) - 0.3) - 45 * Math.sin(X * 0.0019 + 1) : 590 - 110 * (fbm(X * 0.002, 5, 8, 4) - 0.3) - 30 * Math.sin(X * 0.0037);
    const body = far ? '#2b3664' : '#1a2242', lit = far ? '#4a5a90' : '#34416e';
    x.fillStyle = body; x.beginPath(); x.moveTo(L.x0, 1100);
    for (let X = L.x0; X <= L.x0 + L.w; X += 4) x.lineTo(X, ridge(X)); x.lineTo(L.x0 + L.w, 1100); x.closePath(); x.fill();
    // lit slope strokes on moon-facing faces
    const r = mulberry(far ? 3 : 4);
    for (let X = L.x0; X <= L.x0 + L.w; X += 3) {
      const s = ridge(X + 6) - ridge(X - 6);
      if (s > 0.8) { x.strokeStyle = rgba(lit, clamp(s / 8) * 0.8); x.lineWidth = 2; x.beginPath(); x.moveTo(X, ridge(X) + 1); x.lineTo(X, ridge(X) + 4 + r() * 10); x.stroke(); }
    }
    // texture specks
    for (let i = 0; i < 9000; i++) { const X = L.x0 + r() * L.w; const Y = ridge(X) + 6 + Math.pow(r(), 0.7) * 400; x.fillStyle = r() > 0.5 ? 'rgba(10,14,32,0.35)' : rgba(lit, 0.18); x.fillRect(X, Y, 2 + r() * 6, 1.2); }
    if (!far) {
      // treeline silhouettes along mid ridge
      for (let X = L.x0; X < L.x0 + L.w; X += 9 + r() * 30) {
        if (fbm(X * 0.003, 2, 12, 2) < 0.48) continue;
        const y = ridge(X) + 4; const h = 18 + r() * 34; const poplar = r() > 0.75;
        x.fillStyle = '#121931';
        if (poplar) { x.beginPath(); x.ellipse(X, y - h * 0.8, h * 0.18, h * 0.85, 0, 0, 7); x.fill(); }
        else { for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(X + (r() - .5) * h * 0.5, y - h * 0.5 - r() * h * 0.4, h * (0.25 + r() * 0.2), 0, 7); x.fill(); } }
        x.fillStyle = 'rgba(52,66,110,0.6)'; x.beginPath(); x.arc(X + h * 0.12, y - h * 0.85, h * 0.12, 0, 7); x.fill();
      }
      // tiny farmhouse with one lit window
      const hx = 2960, hy = ridge(hx) + 2; x.fillStyle = '#10162c'; x.fillRect(hx - 22, hy - 22, 44, 24); x.beginPath(); x.moveTo(hx - 27, hy - 21); x.lineTo(hx, hy - 40); x.lineTo(hx + 27, hy - 21); x.fill(); x.fillRect(hx + 10, hy - 44, 6, 14);
      x.fillStyle = '#d9a650'; x.fillRect(hx - 12, hy - 14, 6, 6);
    }
    ART[key] = c;
  }
}

const GL = { x0: -320, y0: 430, w: 3640, h: 900, s: 2 };
function buildGround() {
  const c = mk(GL.w * GL.s, GL.h * GL.s), x = c.getContext('2d');
  x.scale(GL.s, GL.s); x.translate(-GL.x0, -GL.y0);
  const r = mulberry(77);
  const X0 = GL.x0, X1 = GL.x0 + GL.w, YB = GL.y0 + GL.h;
  // fence on hilltop (behind ground edge)
  x.strokeStyle = '#2b2230'; x.fillStyle = '#2e2430';
  for (let fx = 40; fx < 400; fx += 58) { const gy = edgeY(fx); x.fillRect(fx - 3, gy - 46, 6, 50); x.fillStyle = '#4b4058'; x.fillRect(fx + 1, gy - 46, 2, 46); x.fillStyle = '#2e2430'; }
  x.lineWidth = 4; x.strokeStyle = '#2e2430'; x.beginPath(); x.moveTo(30, 560 - 36); x.lineTo(410, 560 - 34); x.moveTo(30, 560 - 18); x.lineTo(410, 560 - 17); x.stroke();
  x.lineWidth = 1.2; x.strokeStyle = '#51465f'; x.beginPath(); x.moveTo(30, 560 - 38); x.lineTo(410, 560 - 36); x.stroke();
  // ground body
  const edge = new Path2D(); edge.moveTo(X0, YB); for (let X = X0; X <= X1; X += 2) edge.lineTo(X, edgeY(X)); edge.lineTo(X1, YB); edge.closePath();
  x.fillStyle = '#1d2a23'; x.fill(edge);
  x.save(); x.clip(edge);
  for (let i = 0; i < 26000; i++) {
    const X = X0 + r() * GL.w; const depth = Math.pow(r(), 0.8) * 500; const Y = edgeY(X) + 4 + depth;
    const cols = ['#18241e', '#223228', '#273a2e', '#15201a', '#2c3f33'];
    x.fillStyle = rgba(cols[(r() * 5) | 0], 0.6); x.fillRect(X, Y, 3 + r() * 14, 1 + r() * 1.6);
  }
  // meadow tufts and tiny pale flowers scattered through the ground body
  for (let i = 0; i < 2600; i++) {
    const X = X0 + r() * GL.w; if (X > POND_X0 - 30 && X < POND_X1 + 30 && r() > 0.2) continue; const d = Math.pow(r(), 1.3) * 520; const Y = edgeY(X) + 14 + d; const k = 1 - d / 560;
    const h = (4 + r() * 9) * (0.6 + k * 0.6);
    x.strokeStyle = rgba(r() > 0.5 ? '#2c4234' : '#36503f', 0.5 + 0.4 * k); x.lineWidth = 1.1;
    x.beginPath(); for (let j = 0; j < 4; j++) { const lx = X + j * 2 - 3; x.moveTo(lx, Y); x.quadraticCurveTo(lx + (j - 1.5), Y - h * 0.6, lx + (j - 1.5) * 2.2, Y - h); } x.stroke();
    if (r() > 0.9) { x.fillStyle = r() > 0.5 ? 'rgba(200,205,230,0.7)' : 'rgba(225,210,160,0.65)'; x.beginPath(); x.arc(X + 2, Y - h, 1.4, 0, 7); x.fill(); }
  }
  // soil band beneath grass
  for (let X = X0; X < X1; X += 3) { x.fillStyle = 'rgba(12,18,14,0.5)'; x.fillRect(X, edgeY(X) + 6 + r() * 3, 3, 10 + r() * 8); }
  // mud ring around pond
  x.fillStyle = '#18211f';
  x.beginPath(); for (let X = POND_X0 - 30; X <= POND_X1 + 30; X += 4) x.lineTo(X, pondTop(clamp(X, POND_X0, POND_X1)) - 4); for (let X = POND_X1 + 30; X >= POND_X0 - 30; X -= 4) x.lineTo(X, pondBot(clamp(X, POND_X0 + 1, POND_X1 - 1)) + 10); x.fill();
  // stones
  for (let i = 0; i < 70; i++) {
    const X = X0 + r() * GL.w; if (X > POND_X0 - 20 && X < POND_X1 + 20) continue; if (X > RAMP_X0 - 10 && X < LIP_X + 10) continue;
    const Y = edgeY(X) + 6 + r() * 60; const s = 3 + r() * 8;
    x.fillStyle = '#272a33'; x.beginPath(); x.ellipse(X, Y, s * 1.4, s, 0, 0, 7); x.fill(); x.fillStyle = '#4a4e5e'; x.beginPath(); x.ellipse(X + s * 0.3, Y - s * 0.35, s * 0.7, s * 0.4, 0, 0, 7); x.fill();
  }
  x.restore();
  // grass fringe
  for (let pass = 0; pass < 3; pass++) {
    for (let X = X0; X < X1; X += 0.9) {
      if (X > POND_X0 + 4 && X < POND_X1 - 4) continue;
      if (X > RAMP_X0 + 10 && X < LIP_X - 4) { if (r() > 0.25) continue; }
      const gy = edgeY(X) + 3 + pass * 2; const h = (5 + r() * 12) * (pass === 0 ? 1.1 : 0.8); const lean = (r() - 0.4) * 6;
      const tipLit = r() > 0.6;
      x.strokeStyle = pass === 0 ? '#2a4233' : pass === 1 ? '#335040' : '#3b5a47'; x.lineWidth = 1.3;
      x.beginPath(); x.moveTo(X, gy); x.quadraticCurveTo(X + lean * 0.3, gy - h * 0.6, X + lean, gy - h); x.stroke();
      if (tipLit && pass === 2) { x.strokeStyle = '#7a9a8c'; x.lineWidth = 1; x.beginPath(); x.moveTo(X + lean * 0.7, gy - h * 0.75); x.lineTo(X + lean, gy - h); x.stroke(); }
    }
  }
  // ramp: wooden kicker
  const rp = new Path2D(); rp.moveTo(RAMP_X0 - 4, 772); for (let X = RAMP_X0; X <= LIP_X; X += 2) rp.lineTo(X, rampY(X)); rp.lineTo(LIP_X, 772); rp.closePath();
  x.fillStyle = '#2f2219'; x.fill(rp);
  x.save(); x.clip(rp);
  for (let X = RAMP_X0 + 20; X < LIP_X; X += 34) { x.fillStyle = '#4a3424'; x.fillRect(X, rampY(X), 9, 780 - rampY(X)); x.fillStyle = '#6a4c33'; x.fillRect(X + 6, rampY(X), 2.5, 780 - rampY(X)); }
  x.strokeStyle = '#51392a'; x.lineWidth = 6; x.beginPath(); x.moveTo(RAMP_X0 + 60, 768); x.lineTo(LIP_X - 6, rampY(LIP_X - 6) + 12); x.moveTo(RAMP_X0 + 150, 768); x.lineTo(LIP_X - 6, 740); x.stroke();
  for (let i = 0; i < 500; i++) { const X = RAMP_X0 + r() * (LIP_X - RAMP_X0); const Y = rampY(X) + r() * (772 - rampY(X)); x.fillStyle = 'rgba(15,10,6,0.3)'; x.fillRect(X, Y, 1, 4 + r() * 10); }
  x.restore();
  // deck boards along surface
  for (let X = RAMP_X0; X < LIP_X; X += 1) { const y = rampY(X); x.fillStyle = (Math.floor((X - RAMP_X0) / 22) % 2) ? '#7a5a3b' : '#86643f'; x.fillRect(X, y - 1, 1.2, 7); }
  for (let X = RAMP_X0 + 22; X < LIP_X; X += 22) { x.fillStyle = '#2a1d14'; x.fillRect(X, rampY(X) - 1, 1.4, 7); x.fillStyle = '#c9b48a'; x.fillRect(X - 6, rampY(X - 6) + 2, 1.5, 1.5); }
  x.strokeStyle = '#b89462'; x.lineWidth = 1.3; x.beginPath(); for (let X = RAMP_X0 + 40; X <= LIP_X; X += 2) x.lineTo(X, rampY(X) - 1); x.stroke();
  x.fillStyle = '#251a12'; x.fillRect(LIP_X - 4, LIP_X ? rampY(LIP_X) - 1 : 0, 6, 772 - rampY(LIP_X)); x.fillStyle = '#5a4130'; x.fillRect(LIP_X - 4, rampY(LIP_X), 2, 100);
  // reeds and cattails at pond banks
  const reed = (X, n, sd) => {
    const rr = mulberry(sd);
    for (let i = 0; i < n; i++) {
      const bx = X + (rr() - .5) * 34, by = edgeY(bx) + 8 + rr() * 6; const h = 40 + rr() * 50; const bend = (rr() - .5) * 18;
      x.strokeStyle = rr() > .5 ? '#2c4434' : '#3a5643'; x.lineWidth = 2; x.beginPath(); x.moveTo(bx, by); x.quadraticCurveTo(bx + bend * .3, by - h * .6, bx + bend, by - h); x.stroke();
      if (rr() > 0.55) { x.fillStyle = '#3a2a1e'; x.save(); x.translate(bx + bend * 0.92, by - h * 0.92); x.rotate(bend * 0.012); x.beginPath(); x.ellipse(0, 0, 3.4, 10, 0, 0, 7); x.fill(); x.fillStyle = '#6a5238'; x.fillRect(0.5, -8, 1.5, 14); x.restore(); }
    }
  };
  reed(POND_X0 - 8, 22, 1); reed(POND_X0 + 40, 10, 2); reed(POND_X1 - 30, 9, 3);
  ART.ground = c;
}

function buildTree() {
  const S = 2, c = mk(700 * S, 640 * S), x = c.getContext('2d');
  x.scale(S, S); x.translate(350, 600);
  const r = mulberry(303);
  const crownC = { x: -10, y: -310 };
  // trunk with root flare
  const tp = new Path2D();
  tp.moveTo(-46, 4); tp.bezierCurveTo(-30, -6, -22, -40, -20, -90); tp.bezierCurveTo(-18, -150, -26, -190, -40, -230); tp.lineTo(30, -236);
  tp.bezierCurveTo(22, -190, 18, -140, 20, -90); tp.bezierCurveTo(22, -40, 32, -4, 52, 4); tp.closePath();
  x.fillStyle = '#231a17'; x.fill(tp);
  x.save(); x.clip(tp);
  for (let i = 0; i < 90; i++) { const bx = -40 + r() * 90; x.strokeStyle = r() > 0.7 ? 'rgba(90,80,96,0.55)' : 'rgba(10,7,6,0.6)'; x.lineWidth = 1 + r() * 2; x.beginPath(); x.moveTo(bx, 4); x.bezierCurveTo(bx + (r() - .5) * 10, -80, bx + (r() - .5) * 14, -150, bx * 0.8, -240); x.stroke(); }
  x.fillStyle = 'rgba(120,120,150,0.35)'; x.fillRect(10, -230, 12, 234);
  x.restore();
  // branches
  const tips = [];
  function branch(bx, by, a, len, w, d) {
    const ex = bx + Math.cos(a) * len, ey = by + Math.sin(a) * len;
    x.strokeStyle = '#211816'; x.lineWidth = w; x.lineCap = 'round'; x.beginPath(); x.moveTo(bx, by); x.quadraticCurveTo((bx + ex) / 2 + (r() - .5) * len * .2, (by + ey) / 2 + (r() - .5) * len * .2, ex, ey); x.stroke();
    if (w > 3) { x.strokeStyle = 'rgba(110,110,140,0.3)'; x.lineWidth = w * 0.25; x.beginPath(); x.moveTo(bx + w * .3, by); x.lineTo(ex + w * .2, ey); x.stroke(); }
    if (d === 0) { tips.push([ex, ey]); return; }
    const n = d > 3 ? 2 : 2 + (r() > .5 ? 1 : 0);
    for (let i = 0; i < n; i++) branch(ex, ey, a + (r() - .5) * 1.3 + (i - (n - 1) / 2) * 0.55, len * (0.62 + r() * 0.2), w * 0.66, d - 1);
  }
  branch(-5, -228, -Math.PI / 2 - 0.5, 90, 24, 5); branch(5, -228, -Math.PI / 2 + 0.55, 95, 24, 5); branch(0, -232, -Math.PI / 2, 80, 20, 5);
  branch(-18, -170, Math.PI + 0.35, 80, 12, 3);
  // leaf masses: clumps around tips, lit from upper right
  const clumps = [];
  for (const [tx, ty] of tips) { if (((tx - crownC.x) / 250) ** 2 + ((ty - crownC.y) / 200) ** 2 > 1.25) continue; clumps.push([tx, ty, 26 + r() * 22]); }
  for (let i = 0; i < 60; i++) { const a = r() * 7, rr = Math.sqrt(r()); clumps.push([crownC.x + Math.cos(a) * rr * 210, crownC.y + Math.sin(a) * rr * 165, 30 + r() * 26]); }
  const leaf = (lx, ly, s, col, a) => { x.fillStyle = col; x.save(); x.translate(lx, ly); x.rotate(a); x.beginPath(); x.ellipse(0, 0, s, s * 0.5, 0, 0, 7); x.fill(); x.restore(); };
  for (const [cx, cy, cr] of clumps) { for (let k = 0; k < 60; k++) { const a = r() * 7, d = Math.sqrt(r()) * cr; leaf(cx + Math.cos(a) * d + 4, cy + Math.sin(a) * d + 6, 4 + r() * 3, '#152620', r() * 7); } }
  for (const [cx, cy, cr] of clumps) { for (let k = 0; k < 70; k++) { const a = r() * 7, d = Math.sqrt(r()) * cr; leaf(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 4 + r() * 3, r() > .5 ? '#1f362b' : '#243d31', r() * 7); } }
  for (const [cx, cy, cr] of clumps) { for (let k = 0; k < 26; k++) { const a = -0.8 + (r() - .5) * 1.6, d = cr * (0.55 + r() * 0.45); leaf(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 3.5 + r() * 2.5, r() > .4 ? '#3b5a4b' : '#557565', r() * 7); } }
  ART.tree = c; ART.treeS = S;
}

function buildGrain() {
  ART.grain = [];
  for (let k = 0; k < 6; k++) {
    const c = mk(960, 540), x = c.getContext('2d'); const id = x.createImageData(960, 540), d = id.data; const r = mulberry(100 + k);
    for (let i = 0; i < d.length; i += 4) { const v = 128 + (r() + r() + r() - 1.5) * 90; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
    x.putImageData(id, 0, 0); ART.grain.push(c);
  }
}

// owl body texture, body space x -52..52, y -118..12 at 3x
const BT = { x0: -54, y0: -120, w: 108, h: 134, s: 3 };
function buildOwlTex() {
  const c = mk(BT.w * BT.s, BT.h * BT.s), x = c.getContext('2d'); x.scale(BT.s, BT.s); x.translate(-BT.x0, -BT.y0);
  const r = mulberry(808);
  x.fillStyle = '#5b3e27'; x.fillRect(BT.x0, BT.y0, BT.w, BT.h);
  // back mottling: rows of feather scallops
  for (let row = 0; row < 26; row++) {
    for (let k = 0; k < 14; k++) {
      const fx = -54 + k * 8 + (row % 2) * 4 + (r() - .5) * 2, fy = -118 + row * 5;
      x.fillStyle = r() > 0.5 ? '#3a271a' : '#704e31'; x.beginPath(); x.ellipse(fx, fy, 4.2, 2.6, 0, 0, Math.PI); x.fill();
      if (r() > 0.6) { x.fillStyle = '#b99563'; x.beginPath(); x.ellipse(fx + 1, fy + 1, 1.3, 0.9, 0, 0, 7); x.fill(); }
    }
  }
  // chest patch (front half) with fine horizontal barring
  const ch = new Path2D(); ch.moveTo(4, -112); ch.bezierCurveTo(30, -110, 50, -80, 48, -50); ch.bezierCurveTo(46, -20, 30, 4, 4, 10); ch.bezierCurveTo(-6, -20, -8, -70, 4, -112); ch.closePath();
  x.save(); x.clip(ch);
  x.fillStyle = '#c4a06a'; x.fillRect(-20, -120, 80, 140);
  for (let y = -100; y < 12; y += 4.2) { x.strokeStyle = 'rgba(52,34,20,0.85)'; x.lineWidth = 1.1; x.beginPath(); for (let X = -10; X < 55; X += 3) x.lineTo(X, y + Math.sin(X * 0.5 + y) * 0.9 + (r() - .5) * 0.6); x.stroke(); }
  // streaky dark upper chest and white bib
  for (let i = 0; i < 40; i++) { const X = 2 + r() * 40, Y = -96 + r() * 26; x.fillStyle = 'rgba(48,30,18,0.8)'; x.beginPath(); x.ellipse(X, Y, 1.4, 4, 0.2, 0, 7); x.fill(); }
  x.fillStyle = '#ebe3cf'; x.beginPath(); x.ellipse(22, -106, 18, 6, 0.25, 0, 7); x.fill();
  x.restore();
  ART.bodyTex = c;
  // speckle tile for head
  const s = mk(160, 160), y = s.getContext('2d'); const r2 = mulberry(44);
  for (let i = 0; i < 380; i++) { y.fillStyle = r2() > 0.5 ? 'rgba(40,26,16,0.75)' : 'rgba(190,156,108,0.65)'; y.beginPath(); y.ellipse(r2() * 160, r2() * 160, 1 + r2() * 1.6, 0.8 + r2(), r2() * 3, 0, 7); y.fill(); }
  ART.speckle = s;
}

function buildArt() { buildSky(); buildClouds(); buildMoon(); buildHills(); buildGround(); buildTree(); buildGrain(); buildOwlTex();
  { const g = ART.ground; const d = g.getContext('2d').getImageData(Math.floor(g.width / 2), g.height - 3, 1, 1).data; ART.groundDeep = `rgb(${d[0]},${d[1]},${d[2]})`; } }

// ===================== actors: motorcycle + great horned owl =====================
let LX = 1; // light direction sign in local space (moon at upper right in world)
function shade(ctx, path, dx, dy, col) {
  ctx.save(); ctx.clip(path);
  const p = new Path2D(); p.rect(-4000, -4000, 8000, 8000); p.addPath(path, new DOMMatrix([1, 0, 0, 1, dx, dy]));
  ctx.fillStyle = col; ctx.fill(p, 'evenodd'); ctx.restore();
}
function rimLight(ctx, path, k, col) { shade(ctx, path, -k * LX * 0.8, k * 0.8, col.replace(/0\.\d+\)$/, m => (parseFloat(m) * 0.7).toFixed(2) + ')')); }
function selfShadow(ctx, path, k, col) { shade(ctx, path, k * LX, -k, col); }
function smoothPoly(pts, closed = true) {
  const p = new Path2D(); const n = pts.length;
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let m0 = mid(pts[n - 1], pts[0]); p.moveTo(m0[0], m0[1]);
  for (let i = 0; i < n; i++) { const a = pts[i], m = mid(a, pts[(i + 1) % n]); p.quadraticCurveTo(a[0], a[1], m[0], m[1]); }
  p.closePath(); return p;
}

// ---------------- motorcycle ----------------
const BK = { SEAT: [58, -112], GRIP: [162, -153], GRIPF: [169, -157], PEG: [52, -58], PEGF: [58, -60], HB: [200, -96], HT: [191, -122], KS: [46, -14] };
function drawWheel(ctx, cx, cy, rot, omega) {
  ctx.save(); ctx.translate(cx, cy);
  const tire = new Path2D(); tire.arc(0, 0, 42, 0, 7); tire.arc(0, 0, 33, 0, 7, true);
  ctx.fillStyle = '#131418'; ctx.fill(tire);
  ctx.save(); ctx.rotate(rot);
  ctx.fillStyle = '#131418';
  for (let i = 0; i < 30; i++) { ctx.save(); ctx.rotate(i * Math.PI * 2 / 30); ctx.fillRect(-2.6, -45, 5.2, 5); ctx.restore(); }
  ctx.restore();
  ctx.strokeStyle = '#4c5262'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 39.5, LX > 0 ? -1.5 : Math.PI + 0.2, LX > 0 ? -0.1 : Math.PI + 1.6); ctx.stroke();
  const blur = clamp((Math.abs(omega) - 10) / 22);
  ctx.save(); ctx.rotate(rot);
  ctx.globalAlpha = 1 - blur * 0.8; ctx.strokeStyle = '#a3aab4'; ctx.lineWidth = 0.9; ctx.beginPath();
  for (let i = 0; i < 28; i++) { const th = i * Math.PI * 2 / 28; const off = (i % 2 ? 0.42 : -0.42); ctx.moveTo(Math.cos(th + off) * 8, Math.sin(th + off) * 8); ctx.lineTo(Math.cos(th) * 30, Math.sin(th) * 30); }
  ctx.stroke(); ctx.globalAlpha = 1;
  if (blur > 0) { ctx.fillStyle = `rgba(150,158,170,${0.22 * blur})`; ctx.beginPath(); ctx.arc(0, 0, 30, 0, 7); ctx.arc(0, 0, 13, 0, 7, true); ctx.fill('evenodd'); }
  ctx.fillStyle = '#c7ccd2'; ctx.fillRect(28, -1.5, 5, 3); // valve stem
  ctx.restore();
  ctx.strokeStyle = '#99a0aa'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, 32, 0, 7); ctx.stroke();
  ctx.strokeStyle = '#555b66'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(0, 0, 29.6, 0, 7); ctx.stroke();
  ctx.fillStyle = '#3b3f47'; ctx.beginPath(); ctx.arc(0, 0, 13, 0, 7); ctx.fill();
  ctx.fillStyle = '#a2a9b2'; ctx.beginPath(); ctx.arc(0, 0, 6.5, 0, 7); ctx.fill();
  ctx.fillStyle = '#25282e'; ctx.beginPath(); ctx.arc(0, 0, 2.6, 0, 7); ctx.fill();
  ctx.restore();
}
function tube(ctx, pts, w, col, hi) {
  ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = col; ctx.lineWidth = w;
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke();
  if (hi) { ctx.strokeStyle = hi; ctx.lineWidth = Math.max(0.8, w * 0.25); ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1] - w * 0.25); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1] - w * 0.25); ctx.stroke(); }
}
// applies base transform (rear axle origin, x toward front axle). returns L.
function bikeBase(ctx, b) {
  ctx.translate(b.R.x, b.R.y + (b.shakeY || 0));
  if (b.dir < 0) ctx.scale(-1, 1);
  const dx = (b.F.x - b.R.x) * b.dir, dy = b.F.y - b.R.y;
  ctx.rotate(Math.atan2(dy, dx) + (b.extraRot || 0));
  return Math.hypot(dx, dy);
}
function drawBikeOwl(ctx, b, o) {
  const prevLX = LX; LX = b.dir < 0 ? -1 : 1;
  if (b.upside) LX = -LX;
  ctx.save();
  const L = bikeBase(ctx, b);
  const c = (b.comp || 0) / WB;
  const Fq = rotP(L, 0, -c); const Fa = [Fq.x, Fq.y];
  // far side
  ctx.save(); ctx.rotate(c);
  if (o && o.riding) { ctx.save(); ctx.translate(BK.SEAT[0], BK.SEAT[1]); drawOwl(ctx, o, 'far'); ctx.restore(); }
  tube(ctx, [[BK.HT[0] + 5, BK.HT[1] - 2], [190, -142], [BK.GRIPF[0] + 2, BK.GRIPF[1]]], 3.5, '#33373f');
  ctx.fillStyle = '#121316'; ctx.beginPath(); ctx.arc(BK.GRIPF[0], BK.GRIPF[1], 5.2, 0, 7); ctx.fill();
  tube(ctx, [[BK.HB[0] + 4, BK.HB[1] - 2], [Fa[0] + 3, Fa[1] - 2]], 6, '#3f434b');
  ctx.restore();
  drawWheel(ctx, 0, 0, b.rotR, b.omega || 0);
  drawWheel(ctx, L, 0, b.rotF, b.omega || 0);
  ctx.save(); ctx.rotate(c);
  drawBikeFrame(ctx, b, Fa);
  if (b.extra) b.extra(ctx);
  if (o && o.riding) { ctx.save(); ctx.translate(BK.SEAT[0], BK.SEAT[1]); drawOwl(ctx, o, 'near'); ctx.restore(); }
  // front of bars drawn above owl's wingtip? grip sits under primaries; lever on top
  ctx.restore();
  ctx.restore();
  LX = prevLX;
}
function drawBikeFrame(ctx, b, Fa) {
  // kickstand
  const sa = lerp(Math.PI - 0.28, Math.PI / 2 + 0.12, clamp(b.stand || 0));
  const kt = [BK.KS[0] + Math.cos(sa) * 56, BK.KS[1] + Math.sin(sa) * 56];
  tube(ctx, [BK.KS, kt], 4, '#2b2e34', '#6d737d'); ctx.fillStyle = '#2b2e34'; ctx.beginPath(); ctx.ellipse(kt[0], kt[1], 6, 2.5, sa - Math.PI / 2, 0, 7); ctx.fill();
  // rear fender + tail light
  ctx.strokeStyle = '#2a2e35'; ctx.lineWidth = 7; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.arc(0, 0, 50, -2.75, -0.95); ctx.stroke();
  ctx.strokeStyle = '#5e6572'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, 53, -2.3, -1.2); ctx.stroke();
  ctx.fillStyle = '#6a1c18'; ctx.fillRect(-52, -62, 10, 7); ctx.fillStyle = '#1b1c20'; ctx.fillRect(-46, -56, 3, 8);
  // swingarm
  tube(ctx, [[56, -30], [0, 0]], 9, '#22262c', '#5c636e');
  // chain + sprockets (chain moves with rear wheel, no slip)
  ctx.save(); ctx.setLineDash([3, 2.2]); ctx.lineDashOffset = -(b.rotR || 0) * 17;
  ctx.strokeStyle = '#7a7f88'; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.moveTo(84, -30); ctx.lineTo(0, -17); ctx.arc(0, 0, 17, -Math.PI / 2, Math.PI / 2, true); ctx.lineTo(84, -14); ctx.arc(84, -22, 8, Math.PI / 2, -Math.PI / 2, true); ctx.stroke();
  ctx.restore();
  ctx.save(); ctx.rotate(b.rotR || 0); ctx.fillStyle = '#5a5f68'; for (let i = 0; i < 12; i++) { ctx.rotate(Math.PI / 6); ctx.fillRect(-1.5, -17, 3, 4); } ctx.restore();
  ctx.fillStyle = '#6c727b'; ctx.beginPath(); ctx.arc(0, 0, 14.5, 0, 7); ctx.fill(); ctx.fillStyle = '#3a3e45'; ctx.beginPath(); ctx.arc(0, 0, 7, 0, 7); ctx.fill();
  // rear shock
  tube(ctx, [[26, -90], [12, -14]], 7, '#2a2d33');
  ctx.strokeStyle = '#b39845'; ctx.lineWidth = 2.2; ctx.beginPath(); for (let i = 0; i <= 12; i++) { const u = i / 12; const x = lerp(25, 14, u) + (i % 2 ? 4 : -4), y = lerp(-84, -24, u); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
  // exhaust
  const ex = new Path2D(); ex.moveTo(122, -78); ex.bezierCurveTo(152, -66, 150, -18, 116, -12); ex.lineTo(30, -16);
  ctx.strokeStyle = '#7f8792'; ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.stroke(ex); ctx.strokeStyle = '#c4cad2'; ctx.lineWidth = 1.4; ctx.save(); ctx.translate(0, -2); ctx.stroke(ex); ctx.restore();
  const muf = new Path2D(); muf.moveTo(36, -22); muf.lineTo(-62, -40); muf.lineTo(-64, -27); muf.lineTo(36, -10); muf.closePath();
  ctx.fillStyle = '#868d98'; ctx.fill(muf); selfShadow(ctx, muf, 4, 'rgba(10,12,20,0.55)'); rimLight(ctx, muf, 1.5, 'rgba(220,228,240,0.6)');
  ctx.fillStyle = '#17181c'; ctx.beginPath(); ctx.ellipse(-63, -33.5, 2.5, 6.5, 0.18, 0, 7); ctx.fill();
  // frame tubes
  tube(ctx, [BK.HB, [134, -26], [118, -8], [70, -8], [56, -30]], 6.5, '#1d2026', '#4f5662');
  tube(ctx, [[192, -116], [62, -98], [56, -30]], 6, '#1d2026', '#4f5662');
  tube(ctx, [[62, -98], [-22, -96], [26, -90]], 5, '#1d2026', '#4f5662');
  // engine
  const cyl = new Path2D(); cyl.moveTo(92, -46); cyl.lineTo(100, -88); cyl.lineTo(126, -84); cyl.lineTo(120, -44); cyl.closePath();
  ctx.fillStyle = '#3c4048'; ctx.fill(cyl);
  ctx.save(); ctx.clip(cyl); for (let i = 0; i < 9; i++) { const y = -50 - i * 4.4; ctx.fillStyle = i % 2 ? '#8c939d' : '#2b2e35'; ctx.save(); ctx.translate(110, y); ctx.rotate(0.12); ctx.fillRect(-20, -1.3, 40, 2.4); ctx.restore(); } ctx.restore();
  ctx.fillStyle = '#4a4f58'; ctx.beginPath(); ctx.ellipse(113, -90, 15, 5, 0.12, 0, 7); ctx.fill();
  const cc = new Path2D(); cc.moveTo(64, -40); cc.bezierCurveTo(66, -52, 120, -54, 128, -40); cc.bezierCurveTo(134, -24, 122, -12, 98, -12); cc.bezierCurveTo(74, -12, 62, -24, 64, -40); cc.closePath();
  ctx.fillStyle = '#3a3e46'; ctx.fill(cc); selfShadow(ctx, cc, 5, 'rgba(8,9,14,0.5)'); rimLight(ctx, cc, 2, 'rgba(190,200,215,0.55)');
  ctx.fillStyle = '#727984'; ctx.beginPath(); ctx.arc(90, -28, 11, 0, 7); ctx.fill(); ctx.fillStyle = '#4a4f58'; ctx.beginPath(); ctx.arc(90, -28, 6, 0, 7); ctx.fill();
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; ctx.fillStyle = '#b3b9c1'; ctx.fillRect(90 + Math.cos(a) * 9 - 0.8, -28 + Math.sin(a) * 9 - 0.8, 1.6, 1.6); }
  ctx.fillStyle = '#2b2e34'; ctx.beginPath(); ctx.arc(80, -64, 9, 0, 7); ctx.fill(); ctx.fillStyle = '#555b65'; ctx.beginPath(); ctx.arc(80, -64, 5, 0, 7); ctx.fill();
  // footpeg
  tube(ctx, [[60, -44], BK.PEG], 4, '#2a2d33'); ctx.fillStyle = '#4b5059'; ctx.beginPath(); ctx.arc(BK.PEG[0], BK.PEG[1], 5, 0, 7); ctx.fill();
  // number plate with a little crescent moon decal
  ctx.fillStyle = '#d8cda9'; ctx.beginPath(); ctx.ellipse(36, -74, 17, 13, -0.08, 0, 7); ctx.fill();
  ctx.strokeStyle = '#2b2722'; ctx.lineWidth = 1.6; ctx.stroke();
  ctx.fillStyle = '#2b3c6a'; ctx.beginPath(); ctx.arc(36, -74, 7.5, 0, 7); ctx.arc(39.5, -76.5, 6.6, 0, 7, true); ctx.fill('evenodd');
  // seat
  const seat = new Path2D(); seat.moveTo(6, -100); seat.bezierCurveTo(10, -112, 40, -112, 70, -110); seat.bezierCurveTo(92, -110, 98, -106, 96, -100); seat.lineTo(10, -96); seat.closePath();
  ctx.fillStyle = '#2b1f19'; ctx.fill(seat); rimLight(ctx, seat, 2, 'rgba(160,140,130,0.5)');
  ctx.save(); ctx.setLineDash([2, 2]); ctx.strokeStyle = '#5c4838'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(14, -103); ctx.bezierCurveTo(30, -108, 60, -107, 92, -104); ctx.stroke(); ctx.restore();
  // tank
  const tank = new Path2D(); tank.moveTo(90, -98); tank.bezierCurveTo(96, -124, 156, -134, 190, -116); tank.bezierCurveTo(194, -106, 184, -97, 172, -95); tank.bezierCurveTo(140, -92, 110, -92, 90, -98); tank.closePath();
  ctx.fillStyle = '#962c22'; ctx.fill(tank);
  ctx.save(); ctx.clip(tank); ctx.fillStyle = '#e1d2ad'; ctx.beginPath(); ctx.moveTo(98, -104); ctx.bezierCurveTo(124, -117, 158, -120, 192, -110); ctx.lineTo(192, -104); ctx.bezierCurveTo(156, -113, 124, -110, 98, -99); ctx.fill(); ctx.restore();
  selfShadow(ctx, tank, 6, 'rgba(30,6,8,0.55)'); rimLight(ctx, tank, 2.2, 'rgba(255,210,190,0.55)');
  ctx.fillStyle = '#c2c8cf'; ctx.beginPath(); ctx.ellipse(126, -122, 6, 2.5, -0.1, 0, 7); ctx.fill();
  // fork (near leg)
  const fv = [Fa[0] - BK.HB[0], Fa[1] - BK.HB[1]]; const fl = Math.hypot(fv[0], fv[1]); const fu = [fv[0] / fl, fv[1] / fl];
  tube(ctx, [BK.HT, BK.HB, [BK.HB[0] + fu[0] * (fl - 50), BK.HB[1] + fu[1] * (fl - 50)]], 5.5, '#aab1ba', '#e8ecf0');
  tube(ctx, [[Fa[0] - fu[0] * 54, Fa[1] - fu[1] * 54], [Fa[0], Fa[1]]], 8.5, '#2a2d33', '#666d78');
  // front fender
  ctx.save(); ctx.translate(Fa[0], Fa[1]); ctx.strokeStyle = '#2a2e35'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(0, 0, 49, -2.5, -0.75); ctx.stroke(); ctx.strokeStyle = '#5e6572'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.arc(0, 0, 52, -2.1, -1.1); ctx.stroke(); ctx.restore();
  // triple clamp, headlight
  ctx.fillStyle = '#2b2e34'; ctx.fillRect(BK.HT[0] - 8, BK.HT[1] - 3, 16, 6); ctx.fillRect(BK.HB[0] - 8, BK.HB[1] - 3, 17, 6);
  ctx.fillStyle = '#7e858f'; ctx.beginPath(); ctx.arc(214, -110, 15, 0, 7); ctx.fill(); ctx.fillStyle = '#41454d'; ctx.beginPath(); ctx.arc(214, -110, 15, 0.6, 2.6); ctx.fill();
  ctx.fillStyle = b.light ? '#fff4c8' : '#cfccbd'; ctx.beginPath(); ctx.ellipse(219, -110, 6, 11, 0, 0, 7); ctx.fill(); ctx.fillStyle = '#f2f0e6'; ctx.fillRect(219, -116, 2, 4);
  // handlebar + grip + lever
  tube(ctx, [BK.HT, [186, -140], [BK.GRIP[0] + 2, BK.GRIP[1]]], 3.8, '#9aa1ab', '#dfe3e8');
  ctx.fillStyle = '#121316'; ctx.beginPath(); ctx.arc(BK.GRIP[0], BK.GRIP[1], 5.5, 0, 7); ctx.fill();
  const tw_ = b.throttle || 0; ctx.strokeStyle = '#3a3d44'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(BK.GRIP[0], BK.GRIP[1], 4, -1.2 + tw_ * 1.4, -0.4 + tw_ * 1.4); ctx.stroke();
  tube(ctx, [[176, -150], [190, -146]], 1.8, '#9aa1ab');
}

// ---------------- great horned owl ----------------
const OWL = { base: '#5b3d26', dark: '#34231a', buff: '#c19d66', pale: '#ebe3cf', disc: '#c27e45', rim: '#22150d', iris: '#f2b01c', beak: '#2e2c2b', talon: '#151414', wing: '#563920', prim: '#47301c', bar: '#a8865c' };
const BODY = (() => { const p = new Path2D(); p.moveTo(0, -106); p.bezierCurveTo(28, -106, 44, -80, 42, -54); p.bezierCurveTo(40, -26, 28, -2, 4, 3); p.bezierCurveTo(-18, 6, -34, -14, -38, -40); p.bezierCurveTo(-42, -70, -28, -104, 0, -106); p.closePath(); return p; })();
function owlBody(o) {
  const wet = o.wet || 0; const s = o.sq || 1; const inf = 1 + (o.inflate || 0); const sx = Math.pow(s, -0.5) * (1 - 0.2 * wet) * (1 + 0.06 * (o.ruffle || 0)) * inf; const sy = s * inf;
  const a = o.lean || 0;
  return { sx, sy, a, bp: (px, py) => rotP(px * sx, py * sy, a) };
}
function featherQuad(ctx, x0, y0, x1, y1, w0, w1, col, bars, barCol) {
  const dx = x1 - x0, dy = y1 - y0, l = Math.hypot(dx, dy) || 1; const nx = -dy / l, ny = dx / l;
  const p = new Path2D(); p.moveTo(x0 + nx * w0, y0 + ny * w0); p.quadraticCurveTo(x0 + dx * 0.6 + nx * w0 * 1.1, y0 + dy * 0.6 + ny * w0 * 1.1, x1 + nx * w1, y1 + ny * w1);
  p.quadraticCurveTo(x1 + dx / l * w1 * 2, y1 + dy / l * w1 * 2, x1 - nx * w1, y1 - ny * w1); p.quadraticCurveTo(x0 + dx * 0.6 - nx * w0 * 0.9, y0 + dy * 0.6 - ny * w0 * 0.9, x0 - nx * w0, y0 - ny * w0); p.closePath();
  ctx.fillStyle = col; ctx.fill(p);
  if (bars) { ctx.strokeStyle = barCol; ctx.lineWidth = 1.6; ctx.beginPath(); for (const u of bars) { const cx = x0 + dx * u, cy = y0 + dy * u; const ww = lerp(w0, w1, u) * 0.85; ctx.moveTo(cx - nx * ww, cy - ny * ww); ctx.lineTo(cx + nx * ww, cy + ny * ww); } ctx.stroke(); }
  return p;
}
function drawWing(ctx, o, side, far) {
  const B = owlBody(o); const bp = B.bp;
  const w = side === 'N' ? o.wingN : o.wingF;
  const S = bp(side === 'N' ? 12 : 4, side === 'N' ? -80 : -84); const Sx = S.x, Sy = S.y;
  const col = c => far ? mixc(c, '#0d0a10', 0.42) : c;
  const fold = [[10, -86], [30, -66], [30, -44], [14, -18], [-34, 6], [-30, -30], [-24, -60], [-4, -84]].map(([x, y]) => { const p = bp(x + (side === 'N' ? 0 : -5), y); return [p.x, p.y]; });
  const foldPrimBase = bp(18, -30), foldTips = [[-40, 4], [-38, 0], [-35, -3], [-31, -6], [-27, -8]].map(([x, y]) => bp(x, y));
  let ext = w ? (w.ext == null ? 1 : w.ext) : 0;
  let poly = fold, primBase = [foldPrimBase.x, foldPrimBase.y], tips = foldTips.map(p => [p.x, p.y]);
  let gripPt = null, secs = [];
  if (ext > 0) {
    const G = [w.x, w.y];
    const Wt = w.grip ? [G[0] - 18, G[1] + 7] : [G[0] - (G[0] - Sx) * 0.3, G[1] - (G[1] - Sy) * 0.3];
    const k = ik2(Sx, Sy, Wt[0], Wt[1], 40, 44, 1);
    const E = [k.ex, k.ey], Wr = [k.wx, k.wy];
    const d1 = [(E[0] - Sx), (E[1] - Sy)], l1 = Math.hypot(...d1) || 1; const p1 = [-d1[1] / l1, d1[0] / l1];
    const d2 = [(Wr[0] - E[0]), (Wr[1] - E[1])], l2 = Math.hypot(...d2) || 1; const p2 = [-d2[1] / l2, d2[0] / l2];
    const gd = [G[0] - Wr[0], G[1] - Wr[1]], gl = Math.hypot(...gd) || 1;
    const ga = Math.atan2(gd[1], gd[0]);
    const ptips = []; for (let i = 0; i < 5; i++) { const a = ga + i * 0.17; const len = gl + (w.grip ? 4 : 18) - i * 6; ptips.push([Wr[0] + Math.cos(a) * len, Wr[1] + Math.sin(a) * len]); }
    const reach = [[Sx - p1[0] * 7, Sy - p1[1] * 7], [E[0] - p1[0] * 6, E[1] - p1[1] * 6], [Wr[0] - p2[0] * 5, Wr[1] - p2[1] * 5], [Wr[0] + p2[0] * 3 + gd[0] / gl * 6, Wr[1] + p2[1] * 3 + gd[1] / gl * 6],
    [Wr[0] + p2[0] * 10, Wr[1] + p2[1] * 10], [(E[0] + Wr[0]) / 2 + p2[0] * 14, (E[1] + Wr[1]) / 2 + p2[1] * 14], [E[0] + p1[0] * 16, E[1] + p1[1] * 16], [Sx + p1[0] * 18, Sy + p1[1] * 18]];
    poly = fold.map((f, i) => [lerp(f[0], reach[i][0], ext), lerp(f[1], reach[i][1], ext)]);
    primBase = [lerp(primBase[0], Wr[0], ext), lerp(primBase[1], Wr[1], ext)];
    tips = tips.map((t, i) => [lerp(t[0], ptips[i][0], ext), lerp(t[1], ptips[i][1], ext)]);
    if (w.grip) gripPt = G;
    // secondaries hang from the forearm and humerus toward the trailing side
    for (let i = 0; i < 8; i++) {
      const u = i / 7; let bx, by, px, py;
      if (u < 0.55) { const v = u / 0.55; bx = lerp(Wr[0], E[0], v); by = lerp(Wr[1], E[1], v); px = p2[0]; py = p2[1]; }
      else { const v = (u - 0.55) / 0.45; bx = lerp(E[0], Sx, v); by = lerp(E[1], Sy, v); px = p1[0]; py = p1[1]; }
      const back = [-(gd[0] / gl), -(gd[1] / gl)]; const L = (24 + 8 * Math.sin(Math.PI * u)) * ext;
      secs.push([bx + px * 6, by + py * 6, bx + px * 6 + (px * 0.85 + back[0] * 0.5) * L, by + py * 6 + (py * 0.85 + back[1] * 0.5) * L]);
    }
  }
  for (let i = 4; i >= 0; i--) featherQuad(ctx, primBase[0], primBase[1], tips[i][0], tips[i][1], 5.5, 1.8, col(OWL.prim), [0.35, 0.58, 0.8], col(OWL.bar));
  for (let i = secs.length - 1; i >= 0; i--) { const s = secs[i]; featherQuad(ctx, s[0], s[1], s[2], s[3], 5.2, 3.6, col(i % 2 ? '#4f3420' : '#5a3c24'), [0.45, 0.8], col('#a07d52')); }
  if (gripPt) { ctx.strokeStyle = col(OWL.prim); ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(gripPt[0], gripPt[1], 5.5, -2.2, 1.2); ctx.stroke(); ctx.strokeStyle = col(OWL.bar); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(gripPt[0], gripPt[1], 5.5, -1.6, 0.2); ctx.stroke(); }
  const mem = smoothPoly(poly);
  ctx.fillStyle = col(OWL.wing); ctx.fill(mem);
  ctx.save(); ctx.clip(mem);
  // covert feathers: overlapping scallop rows that follow the leading edge
  const lead = (u) => { const a = poly[0], b = poly[1], c2 = poly[2]; return u < 0.5 ? [lerp(a[0], b[0], u * 2), lerp(a[1], b[1], u * 2)] : [lerp(b[0], c2[0], u * 2 - 1), lerp(b[1], c2[1], u * 2 - 1)]; };
  const trail = (u) => { const a = poly[7], b = poly[6], c2 = poly[4]; return u < 0.5 ? [lerp(a[0], b[0], u * 2), lerp(a[1], b[1], u * 2)] : [lerp(b[0], c2[0], u * 2 - 1), lerp(b[1], c2[1], u * 2 - 1)]; };
  for (let row = 0; row < 4; row++) {
    for (let i = 0; i <= 10; i++) {
      const u = (i + (row % 2) * 0.5) / 10.5; const L = lead(u), T = trail(u); const f = 0.12 + row * 0.24;
      const cx = lerp(L[0], T[0], f), cy = lerp(L[1], T[1], f); const ang = Math.atan2(T[1] - L[1], T[0] - L[0]);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang - Math.PI / 2);
      ctx.fillStyle = col(row % 2 ? '#6c4b2d' : '#62432a'); ctx.beginPath(); ctx.ellipse(0, 0, 4.6, 5.4, 0, 0, Math.PI); ctx.fill();
      ctx.strokeStyle = col('#2c1c11'); ctx.lineWidth = 0.9; ctx.beginPath(); ctx.ellipse(0, 0, 4.6, 5.4, 0, 0.2, Math.PI - 0.2); ctx.stroke();
      if ((i * 3 + row) % 4 === 0) { ctx.fillStyle = col('#b99766'); ctx.beginPath(); ctx.ellipse(0, 2.4, 1.6, 1, 0, 0, 7); ctx.fill(); }
      ctx.restore();
    }
  }
  ctx.restore();
  if (!far) { selfShadow(ctx, mem, 4, 'rgba(10,6,4,0.4)'); rimLight(ctx, mem, 2, 'rgba(205,210,235,0.42)'); }
  if ((o.wet || 0) > 0.2) { ctx.fillStyle = col('#2a1c12'); for (let i = 0; i < 5; i++) { const p = poly[4 + (i % 4)]; ctx.beginPath(); ctx.moveTo(p[0] - 3, p[1]); ctx.lineTo(p[0] + 3, p[1]); ctx.lineTo(p[0], p[1] + 8 * o.wet); ctx.fill(); } }
}
function drawLeg(ctx, o, side, far) {
  const B = owlBody(o); const hip = B.bp(side === 'N' ? 12 : 4, -22);
  const f = side === 'N' ? o.footN : o.footF; if (!f) return;
  const col = c => far ? mixc(c, '#0d0a10', 0.42) : c;
  const k = ik2(hip.x, hip.y, f.x, f.y - 5, 34, 34, -1);
  ctx.lineCap = 'round';
  // feathered "trousers": fluffy thigh and a feathered tarsus
  ctx.strokeStyle = col('#6e5134'); ctx.lineWidth = 28; ctx.beginPath(); ctx.moveTo(hip.x, hip.y); ctx.lineTo(k.ex, k.ey); ctx.stroke();
  const tx = k.ex - hip.x, ty = k.ey - hip.y, tl = Math.hypot(tx, ty) || 1, nx = -ty / tl, ny = tx / tl;
  ctx.fillStyle = col('#7d5e3c');
  for (let i = 0; i < 5; i++) { const u = 0.2 + i * 0.17; const x = hip.x + tx * u, y = hip.y + ty * u; ctx.beginPath(); ctx.ellipse(x + nx * 9, y + ny * 9, 6, 4, Math.atan2(ty, tx), 0, 7); ctx.fill(); }
  ctx.strokeStyle = col('#9b7a50'); ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(k.ex, k.ey); ctx.lineTo(k.wx, k.wy); ctx.stroke();
  ctx.strokeStyle = col('#5f4529'); ctx.lineWidth = 1; ctx.beginPath(); for (let i = 1; i < 4; i++) { const u = i / 4; const x = lerp(k.ex, k.wx, u), y = lerp(k.ey, k.wy, u); ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y + 1); } ctx.stroke();
  const T = [k.wx, k.wy + 4];
  ctx.strokeStyle = col('#a99069'); ctx.lineWidth = 4.2; ctx.lineCap = 'round';
  const toes = f.perch ? [[0.2], [0.7], [1.2]] : [[-0.25], [0.05], [0.3]];
  for (const [a] of toes) { ctx.beginPath(); ctx.moveTo(T[0], T[1]); if (f.perch) ctx.arc(f.x, f.y, 6.5, -Math.PI / 2 - 0.6 + a * 0.3, -Math.PI / 2 + 1.9 + a * 0.4); else ctx.lineTo(T[0] + 13 * Math.cos(a), f.y - 1); ctx.stroke(); }
  ctx.fillStyle = OWL.talon;
  for (const [a] of toes) {
    let tx2, ty2, ta;
    if (f.perch) { const an = -Math.PI / 2 + 1.9 + a * 0.4; tx2 = f.x + Math.cos(an) * 6.5; ty2 = f.y + Math.sin(an) * 6.5; ta = an + Math.PI / 2; }
    else { tx2 = T[0] + 13 * Math.cos(a); ty2 = f.y - 1; ta = 0.3; }
    ctx.save(); ctx.translate(tx2, ty2); ctx.rotate(ta); ctx.beginPath(); ctx.moveTo(-2, -1.6); ctx.quadraticCurveTo(5, -1, 6, 4); ctx.quadraticCurveTo(3, 1, -2, 1.6); ctx.fill(); ctx.restore();
  }
  ctx.strokeStyle = col('#a99069'); ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(T[0], T[1]); ctx.lineTo(T[0] - 8, f.perch ? f.y + 4 : f.y - 1); ctx.stroke();
}
function drawHead(ctx, o) {
  const wet = o.wet || 0; const hs = (1 - 0.12 * wet) * (o.headS || 1);
  ctx.save(); ctx.rotate(o.tilt || 0); ctx.scale(hs * (o.hsx || 1), hs * (o.hsy || 1));
  const RX = 37, RY = 32, yaw = o.yaw || 0;
  const tuft = (lam) => {
    const a = lam + yaw; const sgn = Math.sign(lam); const x = RX * 0.78 * Math.sin(a); const y = -RY * 0.7;
    const ang = -Math.PI / 2 + sgn * 0.42 + (o.tuft || 0) + wet * sgn * 1.25 + (o.ruffle || 0) * sgn * 0.3;
    for (let k = -1; k <= 1; k++) {
      const aa = ang + k * 0.16, len = 25 - Math.abs(k) * 6 - wet * 6;
      featherQuad(ctx, x + k * 3, y + 2, x + k * 3 + Math.cos(aa) * len, y + 2 + Math.sin(aa) * len, 4.2, 1.2, k === 0 ? '#3a2718' : '#4d3420');
    }
    ctx.strokeStyle = '#8b6a44'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ang) * 20, y + 2 + Math.sin(ang) * 20); ctx.stroke();
  };
  const lams = [-0.62, 0.62];
  for (const l of lams) if (Math.cos(l + yaw) < 0.25) tuft(l);
  const head = new Path2D(); head.moveTo(-RX, -2); head.bezierCurveTo(-RX, -RY * 0.95, -RX * 0.45, -RY, 0, -RY * 0.92); head.bezierCurveTo(RX * 0.45, -RY, RX, -RY * 0.95, RX, -2); head.bezierCurveTo(RX, RY * 0.75, RX * 0.55, RY, 0, RY); head.bezierCurveTo(-RX * 0.55, RY, -RX, RY * 0.75, -RX, -2); head.closePath();
  ctx.fillStyle = OWL.base; ctx.fill(head);
  ctx.save(); ctx.clip(head); ctx.drawImage(ART.speckle, -80 + yaw * 30, -80, 160, 160);
  // facial disc lobes
  for (const lam of [-0.43, 0.43]) {
    const a = lam + yaw, c = Math.cos(a); if (c <= 0.02) continue;
    const cx = RX * 0.86 * Math.sin(a);
    ctx.fillStyle = OWL.disc; ctx.beginPath(); ctx.ellipse(cx, 4, 17.5 * c + 2, 21, 0, 0, 7); ctx.fill();
    ctx.strokeStyle = OWL.rim; ctx.lineWidth = 2.6; ctx.beginPath(); ctx.ellipse(cx, 4, 17.5 * c + 2, 21, 0, lam < 0 ? 1.7 : -1.45, lam < 0 ? 4.6 : 1.45); ctx.stroke();
    ctx.fillStyle = 'rgba(90,50,24,0.45)'; for (let k = 0; k < 6; k++) { ctx.fillRect(cx - 12 * c + k * 4 * c, 14 + (k % 2) * 3, 1.2, 6); }
  }
  // white brows + bristles
  const cf = Math.cos(yaw), fx = RX * 0.9 * Math.sin(yaw);
  if (cf > 0) {
    ctx.strokeStyle = OWL.pale; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(fx, 2); ctx.quadraticCurveTo(fx - 7 * cf, -10, fx - 18 * cf, -16 - (o.angry || 0) * -5); ctx.moveTo(fx, 2); ctx.quadraticCurveTo(fx + 7 * cf, -10, fx + 18 * cf, -16 - (o.angry || 0) * -5); ctx.stroke();
    ctx.fillStyle = '#d9cfb8'; ctx.beginPath(); ctx.ellipse(fx, 24, 10 * cf + 3, 4.5, 0, 0, 7); ctx.fill();
  }
  ctx.restore();
  selfShadow(ctx, head, 5, 'rgba(12,6,4,0.4)'); rimLight(ctx, head, 2.2, 'rgba(210,215,240,0.45)');
  // eyes
  for (const lam of [-0.40, 0.40]) {
    const a = lam + yaw, c = Math.cos(a); if (c <= 0.08) continue;
    const ex = RX * 0.8 * Math.sin(a), ey = -1; const er = 10.5 * (o.eyeS || 1); const rx = er * Math.pow(c, 0.85), ry = er;
    drawEye(ctx, ex, ey, rx, ry, o, Math.sign(lam), c);
  }
  // beak
  if (cf > -0.1) {
    const s = Math.sin(yaw), bx = fx + s * 2;
    ctx.fillStyle = OWL.beak;
    const mo = o.mouth || 0;
    ctx.beginPath(); ctx.moveTo(bx - 5 * cf + 1.5 * s, 4); ctx.lineTo(bx + 5 * cf + 1.5 * s, 4); ctx.quadraticCurveTo(bx + 5 * s + 4 * cf, 7, bx + 6.5 * s, 16 - mo * 2); ctx.quadraticCurveTo(bx - 3 * cf + 2 * s, 10, bx - 5 * cf + 1.5 * s, 4); ctx.fill();
    if (mo > 0.05) { ctx.fillStyle = '#1a0f0c'; ctx.beginPath(); ctx.ellipse(bx + 3 * s, 15, 4 * cf + 1.5, 3.5 * mo, 0, 0, 7); ctx.fill(); ctx.fillStyle = OWL.beak; ctx.beginPath(); ctx.ellipse(bx + 3 * s, 15 + 3.5 * mo, 3.5 * cf + 1.2, 1.8, 0, 0, 7); ctx.fill(); }
    ctx.fillStyle = '#6d6862'; ctx.fillRect(bx - 1 + s * 2, 6, 1.5, 4);
    ctx.strokeStyle = 'rgba(200,180,150,0.6)'; ctx.lineWidth = 0.8; ctx.beginPath(); for (let k = -2; k <= 2; k++) { ctx.moveTo(bx + k * 2.4 * cf, 2); ctx.lineTo(bx + k * 3.4 * cf, 7); } ctx.stroke();
  }
  for (const l of lams) if (Math.cos(l + yaw) >= 0.25) tuft(l);
  // ruffled spikes
  if ((o.ruffle || 0) > 0) { const r = mulberry(91); ctx.fillStyle = OWL.base; for (let i = 0; i < 14; i++) { const a = -2.8 + r() * 2.6, len = (5 + r() * 7) * o.ruffle; const px = Math.cos(a) * RX * 0.98, py = Math.sin(a) * RY * 0.98; ctx.beginPath(); ctx.moveTo(px - 3, py); ctx.lineTo(px + Math.cos(a + 0.3) * len, py + Math.sin(a + 0.3) * len); ctx.lineTo(px + 3, py + 2); ctx.fill(); } }
  if (o.twig) { ctx.strokeStyle = '#2a1d15'; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(-6, -RY - 2); ctx.lineTo(10, -RY - 20); ctx.moveTo(4, -RY - 12); ctx.lineTo(14, -RY - 14); ctx.stroke(); ctx.fillStyle = '#2c4a39'; ctx.beginPath(); ctx.ellipse(16, -RY - 15, 6, 3, 0.4, 0, 7); ctx.fill(); ctx.fillStyle = '#4d6f5c'; ctx.beginPath(); ctx.ellipse(12, -RY - 22, 5, 2.5, -0.6, 0, 7); ctx.fill(); }
  ctx.restore();
}
function drawEye(ctx, ex, ey, rx, ry, o, side, c) {
  ctx.save(); ctx.translate(ex, ey);
  ctx.fillStyle = '#140c08'; ctx.beginPath(); ctx.ellipse(0, 0, rx + 2.4, ry + 2.4, 0, 0, 7); ctx.fill();
  if ((o.happy || 0) > 0.5) {
    ctx.strokeStyle = '#140c08'; ctx.lineWidth = 2.6; ctx.lineCap = 'round'; ctx.fillStyle = OWL.disc; ctx.beginPath(); ctx.ellipse(0, 0, rx + 1, ry + 1, 0, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-rx * 0.8, 2); ctx.quadraticCurveTo(0, -ry * 0.6, rx * 0.8, 2); ctx.stroke(); ctx.restore(); return;
  }
  const iris = new Path2D(); iris.ellipse(0, 0, rx, ry, 0, 0, 7);
  ctx.fillStyle = OWL.iris; ctx.fill(iris);
  ctx.save(); ctx.clip(iris);
  ctx.strokeStyle = 'rgba(160,90,10,0.5)'; ctx.lineWidth = 0.8; ctx.beginPath(); for (let i = 0; i < 14; i++) { const a = i / 14 * 7; ctx.moveTo(Math.cos(a) * rx * 0.55, Math.sin(a) * ry * 0.55); ctx.lineTo(Math.cos(a) * rx, Math.sin(a) * ry); } ctx.stroke();
  const pr = ry * 0.5 * (o.pupil || 1); const px = (o.gx || 0) * ry * 0.38 * c, py = (o.gy || 0) * ry * 0.38;
  ctx.fillStyle = '#060404'; ctx.beginPath(); ctx.ellipse(px, py, pr * Math.max(0.35, c), pr, 0, 0, 7); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,250,0.95)'; ctx.beginPath(); ctx.ellipse(px - rx * 0.28 * LX, py - ry * 0.32, ry * 0.17 * c, ry * 0.17, 0, 0, 7); ctx.fill();
  // lids: upper (with angry slant) and lower
  const lid = clamp(o.lid || 0), ang = (o.angry || 0) * 0.55 * side * -1;
  if (lid > 0.001 || (o.angry || 0) > 0) {
    ctx.save(); ctx.rotate(ang); const ly = -ry - 3 + (2 * ry + 3) * Math.max(lid, (o.angry || 0) * 0.32);
    ctx.fillStyle = '#9a6234'; ctx.fillRect(-rx - 6, -ry - 8, rx * 2 + 12, ly + ry + 8);
    ctx.strokeStyle = '#140c08'; ctx.lineWidth = 2.4; ctx.beginPath(); ctx.moveTo(-rx - 6, ly); ctx.lineTo(rx + 6, ly); ctx.stroke(); ctx.restore();
  }
  const low = clamp(o.lowLid || 0);
  if (low > 0) { const ly = ry + 3 - (ry * 1.2) * low; ctx.fillStyle = '#9a6234'; ctx.fillRect(-rx - 6, ly, rx * 2 + 12, ry * 2); ctx.strokeStyle = '#140c08'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-rx - 6, ly); ctx.lineTo(rx + 6, ly); ctx.stroke(); }
  ctx.restore(); ctx.restore();
}
// o positioned with hip at origin, facing +x
function drawOwl(ctx, o, layer) {
  const B = owlBody(o);
  if (layer === 'far' || layer === 'all') { drawLeg(ctx, o, 'F', true); drawWing(ctx, o, 'F', true); }
  if (layer === 'far') return;
  // tail
  const t0 = B.bp(-28, -10); ctx.save(); ctx.translate(t0.x, t0.y); ctx.rotate(B.a + 1.05 + (o.tailA || 0));
  for (let i = -2; i <= 2; i++) featherQuad(ctx, 0, 0, -22, i * 3.5 + 6, 5, 3, i % 2 ? '#4a321e' : '#3b2817', [0.4, 0.75], '#9c7b52');
  ctx.restore();
  drawLeg(ctx, o, 'N', false);
  // body
  ctx.save(); ctx.rotate(B.a); ctx.scale(B.sx, B.sy);
  ctx.fillStyle = OWL.base; ctx.fill(BODY);
  ctx.save(); ctx.clip(BODY); ctx.drawImage(ART.bodyTex, BT.x0, BT.y0, BT.w, BT.h);
  if ((o.puff || 0) > 0) { ctx.fillStyle = OWL.pale; ctx.beginPath(); ctx.ellipse(22, -100 + 4 * o.puff, 18 + 6 * o.puff, 6 + 9 * o.puff, 0.2, 0, 7); ctx.fill(); }
  if ((o.wet || 0) > 0) { ctx.fillStyle = `rgba(14,20,34,${0.35 * o.wet})`; ctx.fillRect(-60, -120, 120, 140); ctx.strokeStyle = `rgba(20,14,10,${0.6 * o.wet})`; ctx.lineWidth = 1.5; ctx.beginPath(); for (let i = 0; i < 12; i++) { const x = -34 + i * 6.5; ctx.moveTo(x, -90 + (i % 3) * 8); ctx.lineTo(x + 1, 4); } ctx.stroke(); }
  ctx.restore();
  selfShadow(ctx, BODY, 7, 'rgba(10,6,4,0.45)'); rimLight(ctx, BODY, 2.4, 'rgba(210,215,240,0.45)');
  const sp = (o.ruffle || 0) + (o.wet || 0);
  if (sp > 0) {
    const r = mulberry(o.wet > o.ruffle ? 13 : 57);
    ctx.fillStyle = o.wet > o.ruffle ? '#2b1c12' : OWL.base;
    for (let i = 0; i < 22; i++) {
      const a = r() * Math.PI * 2; const ca = Math.cos(a), sa = Math.sin(a);
      const px = 2 + ca * 39, py = -52 + sa * 54;
      const down = o.wet > o.ruffle;
      if (down && sa < 0.2) continue;
      const len = (6 + r() * 7) * Math.min(1, sp);
      const dx = down ? 0 : ca * len, dy = down ? len * 1.2 : sa * len;
      ctx.beginPath(); ctx.moveTo(px - 3.5, py); ctx.lineTo(px + dx, py + dy); ctx.lineTo(px + 3.5, py + 1); ctx.fill();
    }
  }
  ctx.restore();
  drawWing(ctx, o, 'N', false);
  // head is stabilised: it follows the neck point but keeps its own tilt
  const nk = B.bp(8, -100);
  ctx.save(); ctx.translate(nk.x + (o.hdx || 0), nk.y - 22 * B.sy + (o.hdy || 0)); drawHead(ctx, o); ctx.restore();
}
// head-center position of an owl in its local space (for camera framing / gaze)
function owlHeadPos(o) { const B = owlBody(o); const nk = B.bp(8, -100); return { x: nk.x + (o.hdx || 0), y: nk.y - 22 * B.sy + (o.hdy || 0) }; }

// ===================== renderer: camera, layers, water, fx, grade =====================
const C0 = { x: 1500, y: 620, z: 0.8 };
let cv, ctx, actA, actB, aA, aB;
function setupCanvas() {
  cv = document.getElementById('c'); cv.width = W; cv.height = H; ctx = cv.getContext('2d');
  actA = mk(W, H); aA = actA.getContext('2d'); actB = mk(W, H); aB = actB.getContext('2d');
}
const ZK = cam => cam.z * (VERTICAL && !cam.raw ? VZOOM : 1); // 9:16 frames zoom in a little so characters fill the tall frame
function camT(c, cam) { const z = ZK(cam); c.setTransform(z, 0, 0, z, W / 2 - cam.x * z + (cam.sx || 0), H / 2 - cam.y * z + (cam.sy || 0)); }
function w2s(cam, x, y) { const z = ZK(cam); return { x: (x - cam.x) * z + W / 2 + (cam.sx || 0), y: (y - cam.y) * z + H / 2 + (cam.sy || 0) }; }
function drawLayer(c, cam, img, L) {
  const zf = C0.z * Math.pow(ZK(cam) / C0.z, L.f);
  const ox = C0.x + (cam.x - C0.x) * L.f, oy = C0.y + (cam.y - C0.y) * L.f;
  c.setTransform(zf / L.s, 0, 0, zf / L.s, W / 2 + (L.x0 - ox) * zf, H / 2 + (L.y0 - oy) * zf);
  c.drawImage(img, 0, 0);
}
function bikeToWorld(b, px, py) {
  const dx = (b.F.x - b.R.x) * b.dir, dy = b.F.y - b.R.y; const a = Math.atan2(dy, dx) + (b.extraRot || 0); const c = (b.comp || 0) / WB;
  let p = rotP(px, py, c); p = rotP(p.x, p.y, a); return { x: b.R.x + p.x * b.dir, y: b.R.y + p.y + (b.shakeY || 0) };
}
function bikeAngleWorld(b) { const dx = (b.F.x - b.R.x) * b.dir, dy = b.F.y - b.R.y; return Math.atan2(dy, dx) + (b.extraRot || 0); }
function owlHeadWorld(b, o) { const h = owlHeadPos(o); return bikeToWorld(b, BK.SEAT[0] + h.x, BK.SEAT[1] + h.y); }
function drawOwlWorld(c, o, x, y, dir, rot = 0) {
  const p = LX; LX = dir; c.save(); c.translate(x, y); c.scale(dir, 1); c.rotate(rot); drawOwl(c, o, 'all'); c.restore(); LX = p;
}
function shadowAt(c, x, h, rx) { const gy = edgeY(x); const a = clamp(0.5 - h / 500); if (a <= 0) return; c.fillStyle = `rgba(4,6,16,${a})`; c.beginPath(); c.ellipse(x - 6, gy + 3, rx * (1 + h / 400), 5 + h / 120, 0, 0, 7); c.fill(); }
function bikeShadow(c, b) {
  for (const P of [b.R, b.F]) { const gy = edgeY(P.x); if (P.x > POND_X0 && P.x < POND_X1) continue; shadowAt(c, P.x, Math.max(0, gy - P.y - WR), 40); }
  const m = bikeToWorld(b, 100, -20); if (!(m.x > POND_X0 && m.x < POND_X1)) shadowAt(c, m.x, Math.max(0, edgeY(m.x) - m.y - 20), 70);
}

// ---------- water ----------
const RIPPLES = []; // {t, x, s}
function waterDraw(c, T, cam, opt) {
  const lens = new Path2D(); lens.moveTo(POND_X0, pondTop(POND_X0)); for (let x = POND_X0; x <= POND_X1; x += 4) lens.lineTo(x, pondTop(x)); for (let x = POND_X1; x >= POND_X0; x -= 4) lens.lineTo(x, pondBot(x)); lens.closePath();
  c.fillStyle = '#16203a'; c.fill(lens);
  c.save(); c.clip(lens);
  // reflected far bank + sky band
  c.fillStyle = '#0f1628'; c.fillRect(POND_X0, 770, POND_X1 - POND_X0, 16);
  c.fillStyle = '#233157'; c.fillRect(POND_X0, 795, POND_X1 - POND_X0, 30);
  const r = mulberry(55);
  for (let i = 0; i < 260; i++) { const x = POND_X0 + r() * (POND_X1 - POND_X0), y = 782 + Math.pow(r(), 0.8) * 36; c.fillStyle = r() > 0.6 ? 'rgba(70,90,140,0.55)' : 'rgba(10,14,30,0.6)'; c.fillRect(x, y, 6 + r() * 22, 0.9 + (y - 782) * 0.03); }
  // moon reflection, sliced and displaced by ripples
  let amp = 0; for (const rp of RIPPLES) { const a = T - rp.t; if (a > 0 && a < 4) amp += rp.s * Math.exp(-2.2 * a); }
  const mx = MREF_X, my = 797, rx = 46, ry = 12, M = ART.moon, MS = M.width;
  const bright = opt && opt.reflBright != null ? opt.reflBright : 1;
  for (let j = 0; j < 14; j++) {
    const v = j / 14; const y = my - ry + v * 2 * ry; const hh = 2 * ry / 14;
    let dx = 0; for (const rp of RIPPLES) { const a = T - rp.t; if (a > 0 && a < 4) dx += rp.s * 7 * Math.exp(-2.2 * a) * Math.sin(y * 0.9 - a * 18 + rp.x); }
    const half = Math.sqrt(Math.max(0, 1 - (2 * v - 1) * (2 * v - 1))); if (half <= 0) continue;
    const sw = MS * half, sx0 = (MS - sw) / 2, sy0 = MS * (1 - v) - MS / 14;
    c.globalAlpha = 0.85 * bright * (j % 3 === 2 ? 0.55 : 1);
    c.drawImage(M, sx0, clamp(sy0, 0, MS - 2), sw, MS / 14, mx - rx * half + dx, y, 2 * rx * half, hh * 0.78);
  }
  c.globalAlpha = 1;
  // glitter column toward near edge
  const rg = mulberry(56);
  for (let i = 0; i < 18; i++) { const y = my + ry + 1 + i * 1.4; const w = (14 + rg() * 30) * (1 - i / 22); let dx = (rg() - .5) * 10; for (const rp of RIPPLES) { const a = T - rp.t; if (a > 0 && a < 4) dx += rp.s * 6 * Math.exp(-2 * a) * Math.sin(y + a * 15); } c.fillStyle = `rgba(232,226,200,${0.5 * bright * (1 - i / 20)})`; c.fillRect(mx - w / 2 + dx, y, w, 0.8); }
  // ripple rings
  for (const rp of RIPPLES) {
    const a = T - rp.t; if (a <= 0 || a > 2.4) continue;
    for (let k = 0; k < 3; k++) { const aa = a - k * 0.18; if (aa <= 0) continue; const R = 6 + 150 * Math.pow(aa, 0.7) * rp.s; c.strokeStyle = `rgba(190,205,235,${0.6 * (1 - a / 2.4) * (1 - k * 0.25)})`; c.lineWidth = 1.4 / Math.max(1, cam.z * 0.5) + 0.5; c.beginPath(); c.ellipse(rp.x, rp.y || 795, R, R * 0.16, 0, 0, 7); c.stroke(); }
  }
  // lily pads (left side, away from the reflection)
  for (const [lx, ly, lr] of [[1640, 800, 11], [1668, 806, 8], [1700, 799, 7]]) { c.fillStyle = '#1e3a2c'; c.beginPath(); c.ellipse(lx, ly, lr, lr * 0.3, 0, 0.3, 6.0); c.lineTo(lx, ly); c.fill(); c.fillStyle = '#3d6650'; c.fillRect(lx - lr * 0.6, ly - lr * 0.3, lr * 0.8, 0.8); }
  c.restore();
  c.strokeStyle = 'rgba(120,140,170,0.5)'; c.lineWidth = 1.2; c.beginPath(); for (let x = POND_X0 + 8; x <= POND_X1 - 8; x += 4) x === POND_X0 + 8 ? c.moveTo(x, pondBot(x) - 1) : c.lineTo(x, pondBot(x) - 1); c.stroke();
}
const UNDER = (() => { const p = new Path2D(); p.moveTo(POND_X0 + 2, 790); p.lineTo(POND_X1 - 2, 790); p.lineTo(POND_X1 + 10, 3000); p.lineTo(POND_X0 - 10, 3000); p.closePath(); return p; })();
const LENS = (() => { const l = new Path2D(); l.moveTo(POND_X0, pondTop(POND_X0)); for (let x = POND_X0; x <= POND_X1; x += 4) l.lineTo(x, pondTop(x)); for (let x = POND_X1; x >= POND_X0; x -= 4) l.lineTo(x, pondBot(x) - 1); l.closePath(); return l; })();
const ABOVE = (() => { const p = new Path2D(); p.rect(-9000, -9000, 20000, 20000); p.addPath(UNDER); return p; })();

// ---------- particles ----------
function puffs(c, lt, list, col = '#7f879c') {
  for (const p of list) {
    const a = lt - p.t; if (a < 0 || a > p.life) continue;
    const u = a / p.life; const r = p.r0 + p.r1 * Math.sqrt(u);
    const x = p.x + p.vx * (1 - Math.exp(-3 * a)) / 3, y = p.y + p.vy * (1 - Math.exp(-3 * a)) / 3 - 12 * a;
    c.fillStyle = rgba(p.col || col, p.a * (1 - u));
    c.beginPath(); c.arc(x, y, r, 0, 7); c.arc(x + r * 0.7, y - r * 0.3, r * 0.75, 0, 7); c.arc(x - r * 0.6, y - r * 0.2, r * 0.6, 0, 7); c.fill();
  }
}
function exhaustPuffs(c, lt, times, bikeFn, opt = {}) {
  const r = mulberry(opt.seed || 3); const list = [];
  for (const t of times) { const b = bikeFn(t); const p = bikeToWorld(b, -66, -33); list.push({ t, x: p.x, y: p.y, vx: -b.dir * (60 + r() * 50) + (opt.vx || 0), vy: -20 - r() * 30, r0: 3 * (opt.s || 1), r1: (12 + r() * 8) * (opt.s || 1), life: (opt.life || 1.1) + r() * 0.3, a: opt.a || 0.45, col: opt.col }); }
  puffs(c, lt, list);
}
// splash crown + droplets. ev: {t, x, y, s}
function splash(c, T, ev) {
  const a = T - ev.t; if (a < 0 || a > 2.2) return;
  const s = ev.s || 1;
  // crown sheet
  if (a < 0.75) {
    const u = a / 0.75; const h = 150 * s * Math.sin(Math.PI * Math.pow(u, 0.7)); const w = (40 + 160 * Math.pow(u, 0.5)) * s;
    c.fillStyle = 'rgba(150,172,214,0.75)';
    c.beginPath(); c.moveTo(ev.x - w, ev.y);
    for (let k = 0; k <= 16; k++) { const v = k / 16; const xx = ev.x - w + 2 * w * v; const yy = ev.y - h * Math.pow(Math.sin(Math.PI * v), 0.6) * (0.75 + 0.25 * Math.sin(v * 40 + ev.x)); c.lineTo(xx, yy); }
    c.lineTo(ev.x + w, ev.y); c.closePath(); c.fill();
    c.fillStyle = 'rgba(214,226,246,0.8)'; c.beginPath(); c.moveTo(ev.x - w * 0.9, ev.y); for (let k = 0; k <= 12; k++) { const v = k / 12; c.lineTo(ev.x - w * 0.9 + 1.8 * w * v, ev.y - h * 0.35 * Math.sin(Math.PI * v)); } c.closePath(); c.fill();
  }
  // droplets, stretched along their velocity
  const r = mulberry(ev.seed || 7);
  for (let i = 0; i < 70; i++) {
    const vx = (r() - .5) * 900 * s, vy = -(300 + r() * 900) * s, t0 = r() * 0.12; const aa = a - t0; if (aa < 0) continue;
    const x = ev.x + (r() - .5) * 60 * s + vx * aa, y = ev.y - 10 + vy * aa + 0.5 * G * aa * aa;
    if (y > ev.y + 8 && aa > 0.1) continue;
    const vyy = vy + G * aa, sp = Math.hypot(vx, vyy); const rad = (1.6 + r() * 4) * s;
    c.save(); c.translate(x, y); c.rotate(Math.atan2(vyy, vx)); c.fillStyle = r() > 0.4 ? 'rgba(200,214,240,0.9)' : 'rgba(120,145,190,0.9)';
    c.beginPath(); c.ellipse(0, 0, rad * (1 + sp * 0.0025), rad / (1 + sp * 0.001), 0, 0, 7); c.fill(); c.restore();
  }
  // foam
  if (a < 1.8) { const rf = mulberry(9); c.fillStyle = `rgba(200,212,236,${0.6 * (1 - a / 1.8)})`; for (let i = 0; i < 16; i++) { c.beginPath(); c.ellipse(ev.x + (rf() - .5) * 220 * s * (0.4 + a), ev.y + (rf() - .3) * 8, 6 + rf() * 14, 2 + rf() * 2, 0, 0, 7); c.fill(); } }
}
// leaves & feathers bursting, fluttering down with drag (analytic)
function burst(c, T, ev) {
  const a = T - ev.t; if (a < 0) return;
  const r = mulberry(ev.seed || 31);
  for (let i = 0; i < ev.n; i++) {
    const isF = i < ev.nf; const vx = (r() - .4) * 700, vy = -(100 + r() * 500); const k = 2.6 + r(); const vt = 70 + r() * 60;
    const ph = r() * 7, fr = 1.2 + r(); const e = 1 - Math.exp(-k * a);
    let x = ev.x + (r() - .5) * 60 + vx / k * e + Math.sin(a * fr * 3 + ph) * 18 * clamp(a);
    let y = ev.y + (r() - .5) * 50 + vy / k * e + vt * Math.max(0, a - e / k);
    const gy = edgeY(x) + 2; const landed = y >= gy; if (landed) y = gy;
    const rot = landed ? 0.1 + ph : ph + Math.sin(a * fr * 3 + ph) * 0.9 + a * (r() - .5) * 4;
    c.save(); c.translate(x, y); c.rotate(rot);
    if (isF) { c.fillStyle = r() > 0.5 ? '#6b4a2e' : '#8a6a44'; c.beginPath(); c.ellipse(0, 0, 9, 3.2, 0, 0, 7); c.fill(); c.strokeStyle = '#d8c7a2'; c.lineWidth = 0.8; c.beginPath(); c.moveTo(-10, 0); c.lineTo(9, 0); c.stroke(); c.strokeStyle = '#3a2818'; c.beginPath(); c.moveTo(-3, -3); c.lineTo(-3, 3); c.moveTo(3, -3); c.lineTo(3, 3); c.stroke(); }
    else { c.fillStyle = r() > 0.5 ? '#26402f' : '#3b5a49'; c.beginPath(); c.ellipse(0, 0, 6, 3, 0, 0, 7); c.fill(); c.strokeStyle = '#12201a'; c.lineWidth = 0.6; c.beginPath(); c.moveTo(-6, 0); c.lineTo(6, 0); c.stroke(); }
    c.restore();
  }
}
function feather(c, x, y, rot, s = 1) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  const p = new Path2D(); p.moveTo(-16, 0); p.bezierCurveTo(-10, -7, 8, -8, 16, -1); p.bezierCurveTo(8, 4, -8, 6, -16, 0); p.closePath();
  c.fillStyle = '#7a5634'; c.fill(p); c.save(); c.clip(p); c.strokeStyle = '#c9a678'; c.lineWidth = 1.6; for (let i = -10; i < 16; i += 6) { c.beginPath(); c.moveTo(i, -8); c.lineTo(i + 3, 8); c.stroke(); } c.restore();
  c.strokeStyle = '#efe4c8'; c.lineWidth = 0.9; c.beginPath(); c.moveTo(-20, 1); c.quadraticCurveTo(0, -1, 16, -1); c.stroke();
  c.restore();
}
function drops(c, T, src, opt = {}) { // dripping from points: src [[x,y],...]
  const r = mulberry(opt.seed || 61);
  for (let i = 0; i < src.length; i++) {
    const per = 0.35 + r() * 0.3, off = r() * per; const a = ((T + off) % per); const [x, y] = src[i];
    const yy = y + 0.5 * G * 0.5 * a * a; if (opt.stop && yy > opt.stop) continue;
    const sp = G * 0.5 * a; c.fillStyle = 'rgba(190,206,236,0.9)'; c.beginPath(); c.ellipse(x, yy, 1.8, 2 + sp * 0.006, 0, 0, 7); c.fill();
  }
}

// ---------- grade ----------
const GR = {
  moonlit: ['#d4dbf8', 1.0], covered: ['#8f98c6', 0.8],
  dark: ['#a8b0d8', 0.85], cool: ['#b7c1ee', 0.92], wet: ['#9fb0dc', 0.7], anger: ['#f2a894', 1], silver: ['#d9ddf2', 0.5], grey: ['#a9adbb', 0.2], warm: ['#f7d8a8', 1.0], warm2: ['#e9cfae', 0.85]
};
function grade(c, g) {
  c.setTransform(1, 0, 0, 1, 0, 0);
  c.globalCompositeOperation = 'multiply'; c.fillStyle = g.mul; c.fillRect(0, 0, W, H);
  if (g.sat < 1) { c.globalCompositeOperation = 'saturation'; c.globalAlpha = 1 - g.sat; c.fillStyle = '#808080'; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
  c.globalCompositeOperation = 'source-over';
}
function gradeMix(a, b, u) { return { mul: mixc(GR[a][0], GR[b][0], clamp(u)), sat: lerp(GR[a][1], GR[b][1], clamp(u)) }; }

// ---------- compose one frame ----------
function compose(T, S) {
  if (window.CAMO) S.cam = window.CAMO;
  const cam = S.cam; const c = ctx;
  c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  c.drawImage(ART.sky, 0, 0);
  if (S.moon) { const m = S.moon; c.drawImage(ART.moon, m.x - m.r * 320 / 300, m.y - m.r * 320 / 300, m.r * 640 / 300, m.r * 640 / 300); }
  if (!S.noClouds) c.drawImage(ART.clouds, -200 - cam.x * 0.03, S.cloudY || 0);
  if (S.sky) { c.setTransform(1, 0, 0, 1, 0, 0); S.sky(c); }
  if (S.hills !== false) { drawLayer(c, cam, ART.far, LAYER.far); drawLayer(c, cam, ART.mid, LAYER.mid); }
  camT(c, cam);
  if (S.ground !== false) {
    c.save(); c.translate(GL.x0, GL.y0); c.scale(1 / GL.s, 1 / GL.s); c.drawImage(ART.ground, 0, 0); c.restore();
    if (ART.groundDeep) { c.fillStyle = ART.groundDeep; c.fillRect(GL.x0, GL.y0 + GL.h - 2, GL.w, 4000); } // tall (9:16) frames can see below the ground art
    c.save(); c.translate(TREE_X, edgeY(TREE_X) + 6); c.rotate(S.treeRot || 0); c.drawImage(ART.tree, -350, -600, 700, 640); c.restore();
    waterDraw(c, T, cam, S.water);
  }
  if (S.back) S.back(c);
  // actors (optionally smeared along velocity, and split above / below the waterline)
  const drawActs = (x) => { camT(x, cam); for (const a of S.actors) a(x); };
  const sp = S.blur ? Math.hypot(S.blur.x, S.blur.y) : 0;
  let src = null;
  if (sp > 40) {
    aA.setTransform(1, 0, 0, 1, 0, 0); aA.clearRect(0, 0, W, H); drawActs(aA);
    aB.setTransform(1, 0, 0, 1, 0, 0); aB.clearRect(0, 0, W, H);
    const n = Math.min(14, 2 + Math.ceil(sp / 120 / 2.5)); aB.globalCompositeOperation = 'lighter'; aB.globalAlpha = 1 / n;
    for (let i = 0; i < n; i++) { const u = i / (n - 1) - 0.5; aB.drawImage(actA, S.blur.x / 120 * u, S.blur.y / 120 * u); }
    aB.globalAlpha = 1; aB.globalCompositeOperation = 'source-over'; src = actB;
  }
  if (S.pond) {
    camT(c, cam); c.save(); c.clip(ABOVE, 'evenodd');
    if (src) { c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(src, 0, 0); } else drawActs(c);
    c.restore();
    camT(c, cam); c.save(); c.clip(UNDER); c.clip(LENS); c.globalAlpha = 0.22;
    if (src) { c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(src, 0, 0); } else drawActs(c);
    c.restore(); c.globalAlpha = 1;
  } else {
    if (src) { c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(src, 0, 0); } else drawActs(c);
  }
  camT(c, cam);
  if (S.front) S.front(c);
  if (S.screenFront) { c.setTransform(1, 0, 0, 1, 0, 0); S.screenFront(c); }
  grade(c, S.grade);
  // film grain, chosen deterministically from time
  const fi = Math.floor(T * 60 + 0.001); const gi = ART.grain[fi % 6];
  c.globalCompositeOperation = 'overlay'; c.globalAlpha = 0.09; c.drawImage(gi, -((fi * 37) % 300), -((fi * 53) % 200), Math.max(W, H) * 1.25, Math.max(W, H) * 1.25);
  c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  if (S.post) { c.setTransform(1, 0, 0, 1, 0, 0); S.post(c); }
}

// ===================== the film: shot list as pure functions of time =====================
const bump = (t, a, d) => (t > a && t < a + d) ? Math.sin(Math.PI * (t - a) / d) : 0;
function ftrk(t, keys, wf = 16, ws = 6, z = 0.5) { const f = keys.map(k => [k[0], k[1], wf, z]), s = keys.map(k => [k[0], k[1], ws, z]); return trk(t, f) - trk(t, s); }
const RIDE = () => ({ riding: true, wingN: { x: BK.GRIP[0] - BK.SEAT[0], y: BK.GRIP[1] - BK.SEAT[1], grip: true }, wingF: { x: BK.GRIPF[0] - BK.SEAT[0], y: BK.GRIPF[1] - BK.SEAT[1], grip: true }, footN: { x: BK.PEG[0] - BK.SEAT[0], y: BK.PEG[1] - BK.SEAT[1], perch: true }, footF: { x: BK.PEGF[0] - BK.SEAT[0], y: BK.PEGF[1] - BK.SEAT[1], perch: true }, lean: 0.15, sq: 1, yaw: 0.75, tilt: 0, gx: 0.3, gy: 0 });
const ride = p => Object.assign(RIDE(), p);
const idleShake = (T, a = 0.7, f = 22) => a * Math.sin(T * Math.PI * 2 * f) * Math.sin(T * Math.PI * 2 * f * 0.37 + 1);

// ---- shot table ----
const SH = [];
function shot(name, t0, t1, fn) { SH.push({ name, t0, t1, fn }); }
const EV = {};

// ---- physics for the three attempts ----
const A1 = (() => {
  const x0 = 420, x1 = 1215; const s0 = arcAt(x0), s1 = arcAt(x1);
  const B1 = bikeGround(x1);
  const C = { x: LIP_X, y: LIP_Y_() };
  function LIP_Y_() { return rampY(LIP_X); }
  const u = { x: (B1.F.x - B1.R.x) / WB, y: (B1.F.y - B1.R.y) / WB }; const w = { x: C.x - B1.R.x, y: C.y - B1.R.y }; const d = w.x * u.x + w.y * u.y;
  const Q = { x: B1.R.x + u.x * d, y: B1.R.y + u.y * d }; const gap = Math.hypot(C.x - Q.x, C.y - Q.y);
  const P = { x: C.x + (Q.x - C.x) * (gap - 9) / gap, y: C.y + (Q.y - C.y) * (gap - 9) / gap };
  const rot = (p, th) => { const r = rotP(p.x - P.x, p.y - P.y, th); return { x: P.x + r.x, y: P.y + r.y }; };
  let lo = 0, hi = 1.4; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (rot(B1.F, m).y < 770 - WR) lo = m; else hi = m; }
  return { x0, x1, s0, s1, B1, P, rot, dF: (lo + hi) / 2 };
})();
function a1Bike(lt, T) {
  let b;
  if (lt < 0.3) { b = bikeGround(A1.x0); b.shakeY = idleShake(T, 0.6); return b; }
  if (lt < 2.3) { const u = (lt - 0.3) / 2.0; const f = sineInOut(u); const s = A1.s0 + (A1.s1 - A1.s0) * f; b = bikeGround(xAtArc(s)); b.omega = (A1.s1 - A1.s0) * Math.PI / 2 * Math.sin(Math.PI * u) / 2.0 / WR; b.shakeY = idleShake(T, 0.6); return b; }
  const a0 = Math.atan2(A1.B1.F.y - A1.B1.R.y, A1.B1.F.x - A1.B1.R.x);
  const aF = Math.atan2(770 - WR - LIPA.y, Math.sqrt(WB * WB - (770 - WR - LIPA.y) ** 2));
  let ang, xr = A1.x1;
  if (lt < 2.75) { const a = lt - 2.3; ang = a0 + 0.06 * Math.abs(Math.sin(2 * Math.PI * 2.1 * a)) * Math.exp(-1.6 * a); }
  else if (lt < 3.05) { const u = quadIn((lt - 2.75) / 0.3); ang = lerp(a0, aF, u); xr = lerp(A1.x1, LIP_X - 0.6, Math.sqrt(u)); }
  else { ang = aF - 0.05 * Math.max(0, wobble(lt - 3.05, 3.2, 7)); xr = LIP_X - 0.6; }
  b = bikeGround(xr); b.F = { x: b.R.x + WB * Math.cos(ang), y: b.R.y + WB * Math.sin(ang) };
  if (lt > 3.05) b.comp = 7 * Math.max(0, wobble(lt - 3.05, 4, 8));
  return b;
}
function mkAttempt(x0, th, tx, ty, delay) {
  const v = launchSpeed(LIPA, th, tx, ty); const s0 = arcAt(x0), sL = arcAt(LIP_X - 0.6); const D = 2 * (sL - s0) / v; const acc = v / D;
  return { x0, th, v, s0, sL, D, acc, delay, V: { x: v * Math.cos(th), y: v * Math.sin(th) }, rotL: arcAt(LIP_X - 0.6) / WR, T: (tx - LIPA.x) / (v * Math.cos(th)), apexT: -v * Math.sin(th) / G };
}
const A2 = mkAttempt(500, LIPANG, 1800, 772, 0.25);
const A3 = mkAttempt(450, -0.73, 2180, 480, 0.15);
function airBike(A, tf, angFn) {
  const R = { x: LIPA.x + A.V.x * tf, y: LIPA.y + A.V.y * tf + 0.5 * G * tf * tf };
  const a = angFn(tf); const F = { x: R.x + WB * Math.cos(a), y: R.y + WB * Math.sin(a) };
  return { R, F, rotR: A.rotL + A.v / WR * tf, rotF: A.rotL + 0.7 + A.v / WR * tf, dir: 1, omega: A.v / WR, comp: 0, stand: 0 };
}
function groundRun(A, tau) { const s = A.s0 + 0.5 * A.acc * tau * tau; const b = bikeGround(xAtArc(Math.min(s, A.sL))); b.omega = A.acc * tau / WR; return b; }
const ang2 = tf => LIPANG + (0.22 - LIPANG) * sstep(0, A2.T * 1.1, tf);
// time (since launch) when attempt-2 front axle reaches the water
A2.hitT = (() => { for (let t = 0; t < 2; t += 0.002) { const b = airBike(A2, t, ang2); if (b.F.y > 776 && b.F.x > POND_X0) return t; } return A2.T; })();
function a2Bike(lt, T) {
  if (lt < A2.delay) { const b = bikeGround(A2.x0); b.comp = -5 * sstep(0, 0.2, lt); b.shakeY = idleShake(T, 1.1, 28); return b; }
  const tau = lt - A2.delay;
  if (tau < A2.D) { const b = groundRun(A2, tau); b.shakeY = idleShake(T, 0.9, 30); return b; }
  const tf = tau - A2.D;
  if (tf < A2.hitT) return airBike(A2, tf, ang2);
  const b0 = airBike(A2, A2.hitT, ang2); const a = tf - A2.hitT; const e = 1 - Math.exp(-5 * a);
  const dx = A2.V.x * 0.18 * e, dy = 340 * quadOut(a / 0.45);
  b0.R = { x: b0.R.x + dx, y: b0.R.y + dy }; b0.F = { x: b0.F.x + dx, y: b0.F.y + dy * 0.8 }; b0.omega = 0; return b0;
}
const ang3 = tf => LIPANG + (-0.7 - LIPANG) * spring(tf, 12, 0.7) + 0.95 * sstep(0.15, 0.75, tf);
function a3Bike(lt, T) {
  if (lt < A3.delay) { const b = bikeGround(A3.x0); b.extraRot = -0.16 * Math.sin(Math.PI * clamp(lt / 0.5)); b.omega = 30; b.rotR += lt * 30; return b; }
  const tau = lt - A3.delay;
  if (tau < A3.D) { const b = groundRun(A3, tau); b.extraRot = -0.16 * Math.sin(Math.PI * clamp(lt / 0.5)); b.shakeY = idleShake(T, 1.2, 34); return b; }
  return airBike(A3, tau - A3.D, ang3);
}

// ---------- timeline ----------
const T_S2 = 2.7, T_S3 = 3.9, T_S4 = 7.3, T_S5 = 8.25, T_S6 = 11.5, T_S7 = 12.9, T_S8A = 14.0;
const T_S8B = T_S8A + A3.delay + A3.D + 0.38, T_S8C = 16.9, T_S9 = 18.3, T_S10 = 20.5, T_S10B = 21.9, T_S11A = 23.1, T_S11B = 24.7, T_S12 = 27.2;
Object.assign(EV, {
  hoot: [0.30, 0.62], blink1: 2.1,
  rev1: T_S2 + 0.62, start1: T_S3 + 0.3, coughs: [1.3, 1.62, 1.92, 2.15].map(x => x + T_S3), teeter: T_S3 + 2.3, tip: T_S3 + 2.75, thud1: T_S3 + 3.05,
  pop: T_S4 + 0.22, shake: T_S4 + 0.42, glare: T_S4 + 0.75,
  start2: T_S5 + A2.delay, launch2: T_S5 + A2.delay + A2.D, splash2: T_S5 + A2.delay + A2.D + A2.hitT,
  surface: T_S6 + 0.05, puffCheeks: T_S6 + 0.45, spit: T_S6 + 0.72, slump: T_S6 + 0.95,
  glare3: T_S7 + 0.05, crouch3: T_S7 + 0.2, rev3: T_S7 + 0.55,
  start3: T_S8A, launch3: T_S8A + A3.delay + A3.D, apex: T_S8B + 0.4, reachEnd: T_S8B + 0.82, gulp: T_S8B + 0.95, drop: T_S8B + 1.0
});
// S8b time map → physics time since launch
const S8B_DUR = T_S8C - T_S8B;
function s8bTau(lt) { const tA = 0.38, hd = S8B_DUR - 0.23; if (lt < 0.4) return tA + (A3.apexT - tA) * expoOut(lt / 0.4); if (lt < hd) return A3.apexT; return A3.apexT + 0.5 * (lt - hd) * (lt - hd) / 0.23; }
const S8C_TAU0 = s8bTau(S8B_DUR);
const S8C_IMP = A3.T - S8C_TAU0; // local time of tree impact in S8c
Object.assign(EV, { crash: T_S8C + S8C_IMP, bikeLand: T_S8C + 0.62, owlLand: T_S8C + 0.86 });
// bike at rest upside down under the tree
const REST = (() => { const A = Math.PI + 0.40; const R = { x: 2300, y: 0 }; const sa = Math.sin(A), ca = Math.cos(A); R.y = edgeY(2250) - (58 * sa - 112 * ca) - 2; return { R, F: { x: R.x + WB * ca, y: R.y + WB * sa }, A }; })();
// the single feather: from crown to the moon's reflection
const FEATH = { t0: T_S9, t1: T_S10B + 0.55, x0: 2470, y0: 560, x1: MREF_X + 8, y1: 794 };
function featherAt(T) {
  const u = clamp((T - FEATH.t0) / (FEATH.t1 - FEATH.t0)); const a = T - FEATH.t0;
  const sw = Math.sin(2 * Math.PI * 0.62 * a);
  return { x: lerp(FEATH.x0, FEATH.x1, sineInOut(u) * 0.3 + u * 0.7) + 30 * sw * (1 - u), y: lerp(FEATH.y0, FEATH.y1, u) - 8 * Math.abs(Math.cos(2 * Math.PI * 0.62 * a)) * (1 - u), rot: 0.55 * sw - 0.1, landed: u >= 1 };
}
Object.assign(EV, { featherLand: FEATH.t1, rollStop: T_S11A + 0.72, kick: T_S11A + 0.97, engineOff: T_S11A + 0.95, hop: T_S11A + 1.18, hopLand: T_S11A + 1.5 });
const SIT_X = 2088;
Object.assign(EV, { touch: T_S11B + 1.3, sigh: T_S11B + 1.75 });
// gag roll
const PARK_X = 2380; const ROLL_A = 700;
const G_ROLL = T_S12 + 0.72;
function gagX(T) { const a = T - G_ROLL; if (a <= 0) return PARK_X; const tS = Math.sqrt(2 * 255 / ROLL_A); if (a < tS) return PARK_X - 0.5 * ROLL_A * a * a; const v = ROLL_A * tS; return PARK_X - 255 - v * (1 - Math.exp(-5 * (a - tS))) / 5; }
const G_SPLASH = G_ROLL + Math.sqrt(2 * 255 / ROLL_A);
Object.assign(EV, { creak: T_S12 + 0.55, roll: G_ROLL, sploosh: G_SPLASH, drench: G_SPLASH + 0.07, eyesOpen: G_SPLASH + 0.28, eyeSlide: T_S12 + 1.98, headTurn: T_S12 + 2.1, blink2: T_S12 + 2.42, hoo: T_S12 + 2.6 });
RIPPLES.push({ t: EV.splash2, x: 1990, s: 1.4 }, { t: EV.surface, x: 1815, s: 0.7 }, { t: EV.spit + 0.35, x: 1880, s: 0.3 }, { t: EV.featherLand, x: MREF_X + 8, s: 0.55 }, { t: EV.touch, x: 1998, s: 0.8 }, { t: EV.sploosh, x: 2030, s: 1.5 });

// ================= SHOT 1: wide — owl looks up at the moon =================
shot('s1', 0, T_S2, (lt, T) => {
  const u = sineInOut(lt / T_S2);
  const cam = { x: lerp(1520, 1320, u), y: lerp(520, 545, u), z: lerp(0.80, 0.9, u) };
  const b = bikeGround(420);
  const o = ride({
    lean: trk(lt, [[0, 0.14], [1.15, 0.0, 8, 0.7]]), gx: trk(lt, [[0, 0.25], [0.85, 0.55, 22, 0.8]]), gy: trk(lt, [[0, 0.05], [0.85, -0.85, 22, 0.8]]),
    tilt: trk(lt, [[0, 0.02], [1.0, -0.42, 9, 0.6]]), yaw: trk(lt, [[0, 0.8], [1.0, 0.5, 9, 0.6]]),
    tuft: ftrk(lt, [[0, 0], [1.0, 0.5]], 9, 4) * 0.7, puff: bump(lt, 0.30, 0.22) + bump(lt, 0.62, 0.3), mouth: 0.25 * (bump(lt, 0.30, 0.22) + bump(lt, 0.62, 0.3)), lid: bump(lt, EV.blink1, 0.16), hdy: -2 * (bump(lt, 0.30, 0.22) + bump(lt, 0.62, 0.3))
  });
  return { cam, moon: { x: lerp(1480, 1500, u), y: 250, r: 150 }, grade: { mul: GR.cool[0], sat: GR.cool[1] }, actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, o)] };
});
// ================= SHOT 2 & 7: close-up — crouch, twist the throttle =================
function revShot(lt, T, angry) {
  const b = bikeGround(angry ? A3.x0 : 420);
  const tw0 = angry ? 0.55 : 0.62;
  const o = ride({
    lid: trk(lt, [[0, angry ? 0.1 : 0], [angry ? 0.03 : 0.08, angry ? 0.35 : 0.36, 26, 0.8]]), angry: trk(lt, [[0, angry ? 0.2 : 0], [angry ? 0.03 : 0.08, angry ? 1 : 0.55, 26, 0.8]]),
    gx: 0.5, gy: trk(lt, [[0, angry ? 0 : -0.85], [0.06, 0, 20, 0.8]]),
    tilt: trk(lt, [[0, angry ? 0.05 : -0.42], [0.18, 0.08, 14, 0.6]]), yaw: trk(lt, [[0, angry ? 0.75 : 0.5], [0.18, 0.78, 14, 0.6]]),
    sq: trk(lt, [[0, 1], [0.3, angry ? 0.82 : 0.9, 12, 0.6], [tw0 + 0.04, angry ? 1.12 : 1.06, 22, 0.4], [tw0 + 0.25, 1, 10, 0.6]]),
    lean: trk(lt, [[0, 0.05], [0.32, angry ? 0.42 : 0.3, 12, 0.6], [tw0 + 0.04, angry ? 0.05 : 0.15, 18, 0.4]]),
    tuft: ftrk(lt, [[0, 0], [tw0 + 0.04, -0.6]], 18, 6) * 1.2, wet: angry ? 0.3 : 0, hdx: trk(lt, [[0, 0], [tw0 + 0.04, -4, 18, 0.5]])
  });
  b.throttle = tw(lt, [[0, 0], [tw0, 1, 0.08, expoOut]]); b.comp = -6 * tw(lt, [[0, 0], [tw0, 1, 0.1, expoOut]]); b.shakeY = lt > tw0 ? idleShake(T, angry ? 1.6 : 1.0, 30) : 0;
  const head = owlHeadWorld(bikeGround(angry ? A3.x0 : 420), ride({}));
  const cam = { x: head.x + 40, y: head.y + 32, z: 2.9 };
  if (angry && lt > tw0) { cam.sx = 4 * wobble(lt - tw0, 9, 6); cam.sy = 3 * wobble(lt - tw0, 11, 6); }
  const pt = []; for (let t = tw0; t < lt; t += 0.07) pt.push(t);
  const drips = angry ? [[0.55, 0]] : [];
  return {
    cam, moon: { x: 1700, y: 120, r: 300 }, grade: angry ? gradeMix('anger', 'anger', 1) : gradeMix('cool', 'cool', 0), hills: true,
    actors: [c => drawBikeOwl(c, b, o)],
    front: c => { exhaustPuffs(c, lt, pt, () => b, { s: angry ? 1.8 : 1.1, a: angry ? 0.6 : 0.4, col: angry ? '#2e3038' : null }); if (angry) { const h = owlHeadWorld(b, o); drops(c, T, [[h.x + 20, h.y + 30], [h.x - 18, h.y + 26]], { stop: h.y + 140 }); } }
  };
}
shot('s2', T_S2, T_S3, (lt, T) => revShot(lt, T, false));
// ================= SHOT 3: attempt 1 — sputter, teeter, tip =================
shot('s3', T_S3, T_S4, (lt, T) => {
  const b = a1Bike(lt, T);
  const o = ride({
    lean: trk(lt, [[0, 0.2], [2.45, -0.2, 10, 0.6], [3.05, 0.42, 16, 0.4], [3.3, 0.36, 8, 0.8]]),
    sq: trk(lt, [[0, 1], [3.05, 0.72, 20, 0.35], [3.2, 0.8, 8, 0.7]]),
    gx: trk(lt, [[0, 0.5], [2.3, 0.6, 24, 0.8]]), gy: trk(lt, [[0, 0], [2.3, 0.9, 24, 0.8]]), eyeS: trk(lt, [[0, 1], [2.32, 1.18, 18, 0.6]]),
    tilt: trk(lt, [[0, 0.05], [2.42, 0.4, 12, 0.6], [3.05, 0.55, 18, 0.4]]), yaw: trk(lt, [[0, 0.8], [2.42, 0.95, 12, 0.6]]),
    tuft: ftrk(lt, [[0, 0], [3.05, 1]], 20, 5) * 0.9 + 0.2 * Math.max(0, wobble(lt - 1.3, 3, 4)), hdx: trk(lt, [[0, 0], [3.05, 8, 20, 0.4]])
  });
  const cam = { x: 930, y: 575, z: 1.25 };
  if (lt > 3.05) { cam.sy = 5 * wobble(lt - 3.05, 13, 9); }
  const idle = []; for (let t = 0.02; t < 1.25; t += t < 0.3 ? 0.13 : 0.1) idle.push(t);
  const cough = [1.3, 1.62, 1.92, 2.15];
  return {
    cam, moon: { x: 1440, y: 200, r: 135 }, grade: { mul: GR.cool[0], sat: GR.cool[1] }, actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, o)],
    back: c => { exhaustPuffs(c, lt, idle, t => a1Bike(t, t + T_S3), { s: 0.8, a: 0.35 }); exhaustPuffs(c, lt, cough, t => a1Bike(t, t + T_S3), { s: 1.9, a: 0.7, col: '#2c2e36', life: 1.4, seed: 8 }); },
    front: c => { if (lt > 3.03) { const r = mulberry(4); for (let i = 0; i < 18; i++) { const a = lt - 3.05; const x = a1Bike(3.2, 0).F.x + (r() - 0.5) * 20 + (r() - 0.3) * 260 * a; const y = 770 - (180 + r() * 220) * a + 0.5 * G * a * a; if (y < 772 && a < 0.8) { c.fillStyle = r() > 0.5 ? '#3c5a46' : '#2a2018'; c.fillRect(x, y, 3, 2); } } } }
  };
});
// ================= SHOT 4: pop up, shake it off, glare =================
shot('s4', T_S4, T_S5, (lt, T) => {
  const b = a1Bike(3.4 + lt, T);
  const ba = bikeAngleWorld(b);
  const o = ride({
    sq: trk(lt, [[0, 0.8], [0.1, 0.7, 20, 0.6], [0.22, 1.15, 18, 0.35], [0.4, 1.0, 12, 0.5]]),
    lean: trk(lt, [[0, 0.36], [0.22, -ba * 0.75, 16, 0.4]]), tilt: trk(lt, [[0, 0.55], [0.2, -ba * 0.9, 14, 0.5], [0.75, -ba * 0.9 + 0.12, 16, 0.6]]),
    yaw: 0.6 + 0.5 * Math.sin(2 * Math.PI * 5 * (lt - 0.42)) * bump(lt, 0.42, 0.32), gx: 0.5, gy: trk(lt, [[0, 0.9], [0.18, 0, 20, 0.8]]),
    tuft: 0.45 * Math.sin(2 * Math.PI * 5 * (lt - 0.5)) * bump(lt, 0.48, 0.4) + ftrk(lt, [[0, 0], [0.22, -0.8]], 18, 6),
    lid: trk(lt, [[0, 0], [0.75, 0.38, 26, 0.8]]), angry: trk(lt, [[0, 0], [0.75, 0.75, 26, 0.8]]), hdx: trk(lt, [[0, 8], [0.22, 0, 16, 0.5]])
  });
  const head = owlHeadWorld(a1Bike(3.4, T), ride({ lean: 0.36, sq: 0.8, tilt: 0.55 }));
  return { cam: { x: head.x + 10, y: head.y + 40, z: 2.2 }, moon: { x: 1600, y: 150, r: 210 }, grade: { mul: GR.cool[0], sat: GR.cool[1] }, actors: [c => drawBikeOwl(c, b, o)] };
});
// ================= SHOT 5: attempt 2 — launch, overshoot, splash =================
shot('s5', T_S5, T_S6, (lt, T) => {
  const b = a2Bike(lt, T); const tl = lt - A2.delay - A2.D;
  const o = ride({
    sq: trk(lt, [[0, 1], [0.05, 0.9, 14, 0.6], [A2.delay + A2.D, 1.12, 16, 0.4], [A2.delay + A2.D + 0.25, 1, 10, 0.6]]),
    lean: trk(lt, [[0, 0.15], [0.05, 0.35, 12, 0.6], [A2.delay + A2.D, -0.1, 14, 0.5]]),
    eyeS: trk(lt, [[0, 1], [A2.delay + A2.D + 0.12, 1.25, 20, 0.5]]), lid: trk(lt, [[0, 0.3], [A2.delay + A2.D + 0.1, 0, 24, 0.8]]), angry: trk(lt, [[0, 0.6], [A2.delay + A2.D + 0.1, 0, 24, 0.8]]),
    gy: trk(lt, [[0, 0], [A2.delay + A2.D + 0.18, 0.95, 24, 0.8]]), gx: 0.6, tilt: trk(lt, [[0, 0.05], [A2.delay + A2.D + 0.26, 0.45, 14, 0.6]]),
    tuft: ftrk(lt, [[0, 0], [A2.delay + A2.D, -1]], 16, 5),
    wingN: tl > 0.12 ? { x: 70, y: -90, grip: false, ext: 1 } : undefined
  });
  if (!(tl > 0.12)) delete o.wingN, o.wingN = RIDE().wingN;
  const v = (() => { const b2 = a2Bike(lt + 0.01, T); return { x: (b2.R.x - b.R.x) * 100 * 1.05, y: (b2.R.y - b.R.y) * 100 * 1.05 }; })();
  const run = []; for (let t = A2.delay; t < Math.min(lt, A2.delay + A2.D); t += 0.06) run.push(t);
  const fs = []; for (let t = 0.02; t < A2.delay; t += 0.07) fs.push(t);
  const ev = { t: EV.splash2, x: a2Bike(A2.delay + A2.D + A2.hitT, T).F.x - 30, y: WATER_Y, s: 1.2, seed: 7 };
  return {
    cam: { x: 1180, y: 600, z: 1.05 }, moon: { x: 1450, y: 220, r: 125 }, grade: { mul: GR.cool[0], sat: GR.cool[1] }, pond: true, blur: v,
    actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, o)],
    back: c => exhaustPuffs(c, lt, run.concat(fs), t => a2Bike(t, t + T_S5), { s: 1, a: 0.4 }),
    front: c => splash(c, T, ev)
  };
});
// ================= SHOT 6: surfaces drenched, spits =================
shot('s6', T_S6, T_S7, (lt, T) => {
  const hipY = trk(lt, [[0, 930], [0.03, 836, 11, 0.42]]);
  const o = {
    wet: 1, sq: trk(lt, [[0, 1.12], [0.25, 1, 10, 0.5], [0.95, 0.9, 8, 0.7]]), lean: trk(lt, [[0, 0], [0.95, 0.12, 8, 0.7]]), yaw: 0.28, tilt: trk(lt, [[0, -0.1], [0.95, 0.16, 8, 0.7]]),
    lid: trk(lt, [[0, 0.1], [0.3, 0.45, 20, 0.8], [0.95, 0.6, 10, 0.8]]), gx: 0.6, gy: 0.1,
    hsx: 1 + 0.12 * tw(lt, [[0, 0], [0.42, 1, 0.12, expoOut], [0.7, 0, 0.08, expoIn]]), puff: 0.4 * tw(lt, [[0, 0], [0.42, 1, 0.12, expoOut], [0.7, 0, 0.08, expoIn]]),
    mouth: bump(lt, 0.7, 0.3) * 0.9, tuft: 0
  };
  const b = { R: { x: 1690, y: 935 }, F: { x: 1918, y: 905 }, rotR: 0, rotF: 0.5, dir: 1, omega: 0 };
  const head = { x: 1815 + 8, y: hipY - 125 };
  return {
    cam: { x: 1835, y: 770, z: 2.5 }, moon: { x: 1500, y: 150, r: 220 }, grade: gradeMix('cool', 'wet', lt / 0.6), pond: true,
    actors: [c => drawBikeOwl(c, b, null), c => drawOwlWorld(c, o, 1815, hipY, 1)],
    front: c => {
      const h = { x: 1815 + 16, y: hipY - 112 };
      if (lt > 0.7) { const r = mulberry(3); for (let i = 0; i < 26; i++) { const t0 = 0.7 + i * 0.008; const a = lt - t0; if (a < 0 || a > 0.6) continue; const vx = 380 + r() * 120, vy = -160 - r() * 80; const x = h.x + 10 + vx * a, y = h.y + 6 + vy * a + 0.5 * G * a * a; if (y > 796) continue; c.fillStyle = 'rgba(190,206,236,0.9)'; c.beginPath(); c.ellipse(x, y, 2.6, 2, Math.atan2(vy + G * a, vx), 0, 7); c.fill(); } }
      drops(c, T, [[1790, hipY - 60], [1842, hipY - 50], [1800, hipY - 150], [1848, hipY - 140], [1830, hipY - 98]], { stop: 794 });
    }
  };
});
shot('s7', T_S7, T_S8A, (lt, T) => revShot(lt, T, true));
// ================= SHOT 8a: attempt 3 — wheelie start, rocket off the ramp =================
shot('s8a', T_S8A, T_S8B, (lt, T) => {
  const b = a3Bike(lt, T); const tl = lt - A3.delay - A3.D;
  const o = ride({
    wet: 0.2, lean: trk(lt, [[0, 0.42], [A3.delay + A3.D, 0.0, 14, 0.5]]), sq: trk(lt, [[0, 0.86], [A3.delay + A3.D, 1.12, 16, 0.4]]),
    lid: trk(lt, [[0, 0.35], [A3.delay + A3.D + 0.1, 0.1, 18, 0.8]]), angry: trk(lt, [[0, 1], [A3.delay + A3.D + 0.1, 0.2, 18, 0.8]]), gx: 0.6, gy: trk(lt, [[0, 0], [A3.delay + A3.D, -0.8, 22, 0.8]]),
    tilt: trk(lt, [[0, 0.08], [A3.delay + A3.D + 0.1, -0.35, 12, 0.6]]), tuft: ftrk(lt, [[0, 0], [0.1, -1], [A3.delay + A3.D, -1.6]], 16, 5) * 0.8
  });
  const b2 = a3Bike(lt + 0.01, T); const v = { x: (b2.R.x - b.R.x) * 100 * 1.0, y: (b2.R.y - b.R.y) * 100 * 1.0 };
  const run = []; for (let t = 0; t < Math.min(lt, A3.delay + A3.D); t += 0.045) run.push(t);
  return {
    cam: { x: 1150, y: 545, z: 1.0 }, moon: { x: 1690, y: 205, r: 140 }, grade: gradeMix('anger', 'anger', 1), blur: v,
    actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, o)],
    back: c => { exhaustPuffs(c, lt, run, t => a3Bike(t, t + T_S8A), { s: 1.5, a: 0.5, col: '#3a3c45' }); const r = mulberry(12); for (let i = 0; i < 20; i++) { const a = lt - i * 0.01; if (a < 0 || a > 0.7) continue; const x = 440 - (150 + r() * 250) * a, y = 560 - (120 + r() * 200) * a + 0.5 * G * a * a; if (y < 562) { c.fillStyle = 'rgba(90,80,70,0.7)'; c.fillRect(x, y, 3, 3); } } }
  };
});
// ================= SHOT 8b: apex — reach for the moon, hold, look down =================
shot('s8b', T_S8B, T_S8C, (lt, T) => {
  const tau = s8bTau(lt); const b = airBike(A3, tau, ang3);
  const ap = airBike(A3, A3.apexT, ang3);
  const reach = tw(lt, [[0, 0], [0.1, 1, 0.3, expoOut], [S8B_DUR - 0.15, 0.4, 0.2, expoIn]]);
  const G0 = RIDE().wingN;
  const o = ride({
    wet: 0.15, sq: trk(lt, [[0, 1.08], [0.15, 1.12, 10, 0.6], [0.95, 0.94, 18, 0.5]]), lean: trk(lt, [[0, 0], [0.15, -0.12, 10, 0.6]]),
    gx: trk(lt, [[0, 0.6], [0.82, 0.3, 26, 0.8]]), gy: trk(lt, [[0, -0.8], [0.0, -0.95, 26, 0.8], [0.8, 0.95, 26, 0.8]]),
    tilt: trk(lt, [[0, -0.35], [0.08, -0.5, 12, 0.6], [0.9, 0.4, 14, 0.6]]), yaw: 0.62, eyeS: trk(lt, [[0, 1.05], [0.8, 1.3, 22, 0.5]]),
    puff: bump(lt, 0.95, 0.14) * 0.6, hdy: bump(lt, 0.95, 0.14) * 3, lid: 0, angry: 0,
    tuft: ftrk(lt, [[0, -1], [0.15, 0], [0.9, 0.8]], 14, 5) * 0.6,
    wingN: { x: lerp(G0.x, 100, reach), y: lerp(G0.y, -175, reach), grip: reach < 0.5, ext: 1 }
  });
  const cam = { x: ap.R.x + 120, y: ap.R.y - 70, z: 1.9 };
  return { cam, moon: { x: 1130, y: 380, r: 400 }, grade: gradeMix('anger', 'silver', lt / 0.35), hills: false, ground: false, actors: [c => drawBikeOwl(c, b, o)], cloudY: 300 };
});
// ================= SHOT 8c: fall into the oak — crash =================
function s8cBike(lt) {
  const tau = S8C_TAU0 + lt;
  if (lt < S8C_IMP) return airBike(A3, tau, ang3);
  const b0 = airBike(A3, A3.T, ang3); const a = lt - S8C_IMP; const D = 0.62 - S8C_IMP; const u = clamp(a / D);
  const a0 = ang3(A3.T); const A = lerp(a0, REST.A, quadIn(u)) - (lt > 0.62 ? 0.08 * Math.max(0, wobble(lt - 0.62, 3, 7)) : 0);
  const R = { x: lerp(b0.R.x, REST.R.x, u), y: lerp(b0.R.y, REST.R.y, quadIn(u)) - (lt > 0.62 ? 10 * Math.max(0, wobble(lt - 0.62, 3, 9)) : 0) };
  const spin = 2.5 * Math.exp(-2 * a);
  return { R, F: { x: R.x + WB * Math.cos(A), y: R.y + WB * Math.sin(A) }, rotR: b0.rotR + spin * 0.5, rotF: b0.rotF + 8 / 0.6 * (1 - Math.exp(-0.6 * a)), dir: 1, omega: 6, comp: 0, upside: true };
}
const OWL_SIT_Y = x => edgeY(x) - 4;
const SIT_FEET = { footN: { x: 14, y: 0 }, footF: { x: 22, y: -2 } };
shot('s8c', T_S8C, T_S9, (lt, T) => {
  const b = s8cBike(lt); const sep = S8C_IMP + 0.03;
  const actors = [];
  if (lt < sep) { const o = ride({ wet: 0.1, eyeS: 1.3, gy: 0.95, tilt: 0.4, yaw: 0.62, sq: 0.95, lean: 0.05 }); actors.push(c => drawBikeOwl(c, b, o)); }
  else {
    actors.push(c => drawBikeOwl(c, b, null));
    const b0 = airBike(A3, A3.T, ang3); const s0 = bikeToWorld(b0, BK.SEAT[0], BK.SEAT[1]);
    const a = lt - sep, D = 0.86 - sep, u = clamp(a / D);
    const x = lerp(s0.x, 2440, u), y = lerp(s0.y, OWL_SIT_Y(2440), quadIn(u));
    const landed = lt >= 0.86;
    const o = Object.assign({
      ruffle: clamp(a * 4), twig: true, eyeS: landed ? 1 : 1.3, sq: landed ? trk(lt, [[0.86, 0.68], [0.87, 0.95, 14, 0.4]]) : 1.05,
      lean: landed ? 0 : 0, yaw: landed ? 0.2 : 0.5, tilt: landed ? 0.1 * Math.sin(lt * 6) : -0.3, lid: landed ? 0.5 : 0, gx: landed ? 0.4 * Math.cos(lt * 9) : 0, gy: landed ? 0.4 * Math.sin(lt * 9) : -0.6,
      wingN: landed ? null : { x: 40, y: -170, ext: 0.8 }, wingF: landed ? null : { x: 20, y: -175, ext: 0.8 }, tuft: landed ? ftrk(lt, [[0.86, 0], [0.86, 0.8]], 14, 5) : -0.4
    }, landed ? SIT_FEET : { footN: { x: 20, y: 20 }, footF: { x: 10, y: 24 } });
    actors.push(c => drawOwlWorld(c, o, x, y, -1, landed ? 0 : -1.2 * u));
  }
  const cam = { x: 2300, y: 560, z: 1.12 };
  if (lt > S8C_IMP) { cam.sx = 9 * wobble(lt - S8C_IMP, 12, 7); cam.sy = 7 * wobble(lt - S8C_IMP, 15, 7); }
  if (lt > 0.62) { cam.sy = (cam.sy || 0) + 5 * wobble(lt - 0.62, 14, 10); }
  const v = lt < S8C_IMP ? (() => { const b2 = s8cBike(lt + 0.01); return { x: (b2.R.x - b.R.x) * 100, y: (b2.R.y - b.R.y) * 100 }; })() : null;
  return {
    cam, moon: { x: 1720, y: 200, r: 130 }, grade: gradeMix('anger', 'grey', (lt - 0.5) / 0.9), treeRot: 0.035 * wobble(lt - S8C_IMP, 2.2, 3),
    actors: [c => { if (lt > 0.62) bikeShadow(c, b); }].concat(actors), blur: v,
    front: c => { burst(c, T, { t: EV.crash, x: 2330, y: 480, n: 70, nf: 16, seed: 31 }); }
  };
});
// ================= SHOT 9: dazed under the tree; a feather drifts =================
function dazedOwl(lt, extra) {
  return Object.assign({
    ruffle: 1, twig: true, sq: 0.95, lean: 0, yaw: 0.15 + 0.08 * Math.sin(lt * 2.2), tilt: 0.1 * Math.sin(lt * 3.6 + 1), lid: 0.5, gx: 0.45 * Math.cos(lt * 4.4), gy: 0.45 * Math.sin(lt * 4.4), pupil: 0.8
  }, SIT_FEET, extra);
}
shot('s9', T_S9, T_S10, (lt, T) => {
  const b = { R: REST.R, F: REST.F, rotR: 0, rotF: 8 / 0.6 * (1 - Math.exp(-0.6 * (T - EV.crash))) + 3, dir: 1, omega: 8 * Math.exp(-0.6 * (T - EV.crash)), upside: true };
  const f = featherAt(T);
  const noticing = clamp((lt - 1.7) / 0.2);
  const o = dazedOwl(lt, { lid: trk(lt, [[0, 0.5], [1.2, 1, 30, 0.9], [1.36, 0.5, 30, 0.9]]), gx: lerp(0.45 * Math.cos(lt * 4.4), 0.2, noticing), gy: lerp(0.45 * Math.sin(lt * 4.4), 0.5, noticing) });
  return {
    cam: { x: 2380, y: 640, z: 1.75 }, moon: { x: 1500, y: 140, r: 190 }, grade: gradeMix('grey', 'grey', 1),
    actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, null), c => shadowAt(c, 2440, 0, 46), c => drawOwlWorld(c, o, 2440, OWL_SIT_Y(2440), -1)],
    front: c => { burst(c, T, { t: EV.crash, x: 2330, y: 480, n: 70, nf: 16, seed: 31 }); feather(c, f.x, f.y, f.rot); }
  };
});
// ================= SHOT 10: eyes follow the feather — they widen (the turn) =================
shot('s10', T_S10, T_S10B, (lt, T) => {
  const hipX = 2440, hipY = OWL_SIT_Y(2440);
  const base = dazedOwl(0, {}); const hp = owlHeadPos(base); const hw = { x: hipX - hp.x, y: hipY + hp.y };
  const look = (TT) => { const f = featherAt(TT); return { x: -(f.x - hw.x), y: f.y - hw.y }; }; // local (dir -1)
  const e = look(T), h = look(T - 0.16), bd = look(T - 0.34);
  const ga = Math.atan2(e.y, e.x);
  const widen = spring(lt - 0.85, 16, 0.45);
  const o = dazedOwl(0, {
    gx: clamp(Math.cos(ga) * 1.1, -1, 1), gy: clamp(Math.sin(ga) * 1.1, -1, 1), yaw: clamp(0.2 + Math.atan2(h.x, 260) * 0.9, -0.2, 1.1), tilt: clamp(Math.atan2(h.y, 300) * 0.7, -0.5, 0.5),
    lean: clamp(Math.atan2(bd.x, 900) * 0.3, -0.2, 0.25), lid: lerp(0.5, 0, widen), eyeS: 1 + 0.22 * widen, pupil: 0.8 + 0.5 * widen, ruffle: 1 - 0.3 * widen, sq: 0.95 + 0.05 * widen,
    tuft: ftrk(lt, [[0, 0], [0.85, -0.7]], 16, 5)
  });
  const f = featherAt(T);
  return {
    cam: { x: 2300, y: 650, z: 3.0 }, moon: { x: 900, y: 120, r: 300 }, grade: gradeMix('grey', 'warm2', (lt - 0.85) / 1.0),
    actors: [c => drawOwlWorld(c, o, hipX, hipY, -1)],
    front: c => feather(c, f.x, f.y, f.rot, 1.0)
  };
});
// ================= SHOT 10b: the feather lands on the moon's reflection =================
shot('s10b', T_S10B, T_S11A, (lt, T) => {
  const f = featherAt(T); const bob = f.landed ? 1.5 * wobble(T - FEATH.t1, 1.6, 2) : 0;
  return {
    cam: { x: MREF_X + 10, y: 786, z: 3.4 }, moon: { x: 1450, y: 120, r: 110 }, grade: gradeMix('warm2', 'warm', lt / 1.0), hills: true,
    water: { reflBright: 1 + 0.25 * sstep(0.6, 1.1, lt) },
    actors: [], front: c => feather(c, f.x, f.y + bob, f.landed ? 0.04 : f.rot, 1.0)
  };
});
// ================= SHOT 11a: roll to the bank, kickstand clunk, hop off =================
function parkedBike(T) { const b = bikeGround(PARK_X, -1); b.stand = 1; return b; }
function s11aBike(lt, T) {
  const x = lt < 0.75 ? lerp(2760, PARK_X, expoOut(lt / 0.75) * 0.3 + quadOut(lt / 0.75) * 0.7) : PARK_X;
  const b = bikeGround(x, -1); b.comp = lt > 0.7 ? 6 * Math.max(0, wobble(lt - 0.7, 3, 6)) : 0; b.shakeY = lt < 0.95 ? idleShake(T, 0.5, 14) : 0;
  b.stand = tw(lt, [[0, 0], [0.92, 1, 0.08, expoOut]]); b.omega = lt < 0.75 ? 4 : 0; return b;
}
shot('s11a', T_S11A, T_S11B, (lt, T) => {
  const b = s11aBike(lt, T); const actors = [c => bikeShadow(c, b)];
  const hopT = 1.18, landT = 1.5;
  const kick = bump(lt, 0.86, 0.2);
  const baseO = {
    ruffle: 0.35, twig: true, yaw: trk(lt, [[0, 0.8], [0.9, 0.3, 14, 0.6], [1.05, 0.8, 14, 0.6]]), gx: trk(lt, [[0, 0.5], [0.88, -0.4, 24, 0.8], [1.03, 0.6, 24, 0.8]]), gy: trk(lt, [[0, 0], [0.88, 0.8, 24, 0.8], [1.03, 0.2, 24, 0.8]]),
    lean: trk(lt, [[0, 0.15], [0.72, 0.38, 16, 0.4], [0.9, 0.12, 12, 0.6]]), tilt: trk(lt, [[0, 0], [0.9, 0.25, 14, 0.6], [1.05, 0.0, 14, 0.6]]),
    tuft: ftrk(lt, [[0, 0], [0.72, 0.6]], 16, 5) * 0.8
  };
  if (lt < hopT) {
    const o = ride(Object.assign({}, baseO, { sq: trk(lt, [[0, 1], [1.05, 0.82, 16, 0.6]]) }));
    if (kick > 0) o.footN = { x: lerp(o.footN.x, -6, kick), y: lerp(o.footN.y, 96, kick), perch: false };
    actors.push(c => drawBikeOwl(c, b, o));
  } else {
    actors.push(c => drawBikeOwl(c, b, null));
    const s0 = bikeToWorld(b, BK.SEAT[0], BK.SEAT[1]); const u = clamp((lt - hopT) / (landT - hopT));
    const x = lerp(s0.x, SIT_X, u), y = lerp(s0.y, OWL_SIT_Y(SIT_X), u) - 90 * Math.sin(Math.PI * u);
    const landed = lt >= landT;
    const o = Object.assign({}, baseO, {
      sq: landed ? trk(lt, [[landT, 0.72], [landT + 0.01, 1, 12, 0.4]]) : lerp(1.15, 1.05, u), yaw: 0.85, gx: 0.5, gy: 0.3, lean: landed ? 0.05 : -0.1,
      wingN: landed ? null : { x: 30, y: -160 + 30 * Math.sin(u * 12), ext: 0.7 }, wingF: landed ? null : { x: 20, y: -165 + 30 * Math.sin(u * 12 + 0.5), ext: 0.7 },
      tuft: landed ? ftrk(lt, [[landT, 0], [landT, 0.8]], 14, 5) : -0.5
    }, landed ? SIT_FEET : { footN: { x: 10, y: 10 }, footF: { x: 18, y: 8 } });
    actors.push(c => shadowAt(c, x, OWL_SIT_Y(SIT_X) - y, 40));
    actors.push(c => drawOwlWorld(c, o, x, y, -1));
  }
  return { cam: { x: 2240, y: 640, z: 1.55 }, moon: { x: 1450, y: 170, r: 170 }, grade: gradeMix('warm', 'warm', 1), pond: false, actors };
});
// ================= SHOT 11b: touch the reflected moon =================
function sitOwl11(lt) {
  const touchT = 1.3;
  const ext = tw(lt, [[0, 0], [1.0, 1, 0.32, expoOut], [1.62, 0, 0.42, expoInOut]]);
  const pull = bump(lt, 0.82, 0.2);
  const water = { x: -(1998 - SIT_X), y: 795 - OWL_SIT_Y(SIT_X) };
  const sigh = bump(lt, 1.75, 0.5);
  return Object.assign({
    ruffle: 0.35, twig: true, sq: trk(lt, [[0, 0.9], [0.05, 1, 10, 0.6], [1.75, 0.93, 10, 0.7], [2.1, 1, 6, 0.8]]),
    gx: trk(lt, [[0, 0.5], [0.3, 0.75, 22, 0.8]]), gy: trk(lt, [[0, 0.3], [0.3, 0.85, 22, 0.8], [1.6, 0.4, 14, 0.8]]),
    yaw: trk(lt, [[0, 0.85], [0.45, 0.95, 12, 0.7]]), tilt: trk(lt, [[0, 0], [0.45, 0.42, 12, 0.7], [1.65, 0.12, 8, 0.8]]),
    lean: trk(lt, [[0, 0.05], [0.7, 0.28, 10, 0.7], [1.65, 0.02, 7, 0.8]]),
    wingN: ext > 0.01 ? { x: lerp(30, water.x, ext) - pull * 14, y: lerp(-40, water.y, ext) - pull * 10, ext: ext } : null,
    happy: lt > 1.88 ? 1 : 0, puff: sigh * 0.3, hdy: sigh * 2, tuft: 0.1 * sigh
  }, SIT_FEET);
}
shot('s11b', T_S11B, T_S12, (lt, T) => {
  const b = parkedBike(T); const o = sitOwl11(lt);
  return { cam: { x: 2040, y: 705, z: 2.7 }, moon: { x: 760, y: 170, r: 150 }, grade: gradeMix('warm', 'warm', 1), water: { reflBright: 1.25 }, actors: [c => bikeShadow(c, b), c => drawBikeOwl(c, b, null), c => shadowAt(c, SIT_X, 0, 44), c => drawOwlWorld(c, o, SIT_X, OWL_SIT_Y(SIT_X), -1)] };
});
// ================= SHOT 12: the gag =================
shot('s12', T_S12, 30, (lt, T) => {
  const x = gagX(T); const b = bikeGround(x, -1);
  if (T > G_SPLASH) { const sk = 280 * quadOut((T - G_SPLASH) / 0.6); b.R = { x: b.R.x, y: b.R.y + sk }; b.F = { x: b.F.x - 10 * clamp((T - G_SPLASH) / 0.6), y: b.F.y + sk * 1.1 }; }
  b.stand = tw(lt, [[0, 1], [0.6, 0, 0.18, expoIn]]); b.omega = T > G_ROLL ? 10 : 0;
  if (lt > 0.55 && lt < 0.72) b.extraRot = 0.02 * Math.sin((lt - 0.55) * 60) * (lt - 0.55) * 6;
  const drench = clamp((T - EV.drench) / 0.06);
  const o = Object.assign(sitOwl11(10), {
    wet: drench, sq: trk(T, [[0, 1], [EV.drench, 0.82, 22, 0.4], [EV.drench + 0.15, 1, 8, 0.6]]),
    happy: T < EV.eyesOpen ? 1 : 0, lid: trk(T, [[0, 0.45], [EV.blink2, 1, 40, 0.9], [EV.blink2 + 0.1, 0.45, 30, 0.9]]),
    gx: trk(T, [[0, 0.5], [EV.eyeSlide, -0.75, 18, 0.8], [EV.headTurn + 0.25, 0, 8, 0.9]]), gy: trk(T, [[0, 0.3], [EV.eyeSlide, 0.0, 18, 0.8]]),
    yaw: trk(T, [[0, 0.85], [EV.headTurn, 0.0, 7, 0.85]]), tilt: trk(T, [[0, 0.12], [EV.headTurn, 0.0, 7, 0.85]]),
    mouth: bump(T, EV.hoo, 0.2) * 0.3, puff: bump(T, EV.hoo, 0.22) * 0.5, tuft: drench > 0 ? 0 : 0.1, lean: 0.02
  });
  const sev = { t: EV.sploosh, x: 2045, y: WATER_Y, s: 1.0, seed: 19 };
  return {
    cam: { x: 2150, y: 690, z: 2.1 }, moon: { x: 700, y: 160, r: 130 }, grade: gradeMix('warm', 'warm2', (T - EV.sploosh) / 0.4), pond: true,
    actors: [c => { if (T < G_SPLASH) bikeShadow(c, b); }, c => drawBikeOwl(c, b, null), c => shadowAt(c, SIT_X, 0, 44), c => drawOwlWorld(c, o, SIT_X, OWL_SIT_Y(SIT_X), -1)],
    front: c => { splash(c, T, sev); if (T > EV.drench) { const hp = { x: SIT_X, y: OWL_SIT_Y(SIT_X) }; drops(c, T, [[hp.x - 30, hp.y - 30], [hp.x + 26, hp.y - 40], [hp.x - 10, hp.y - 120], [hp.x + 30, hp.y - 110], [hp.x, hp.y - 4]], { stop: hp.y + 6 }); } }
  };
});

function shotAt(T) { for (const s of SH) if (T >= s.t0 && T < s.t1) return s; return SH[SH.length - 1]; }


// ===================== Part 2: transitions, scene 2 (Fishing for a Bike), scene 3 (Catch That Turtle), end card =====================
const P2 = { T1: 30, S2: 32, T2: 67, S3: 71.5, END: 106.5, DUR: 109 };
const FILM_DUR = P2.DUR;
const EV2 = {};
const SB = 2088, TR = 1900, BX = 2032; // owl's bank seat, the turtle "rock", the bubbles over the sunk bike

// ---------------- new rigs ----------------
function drawTurtle(c, t) {
  c.save(); c.translate(t.x, t.y); c.scale(t.dir || 1, 1); c.rotate(t.tilt || 0);
  const sq = t.sq || 1; c.scale(Math.pow(sq, -0.5), sq);
  const nk = clamp(t.neck == null ? 1 : t.neck), lg = clamp(t.legs == null ? 1 : t.legs);
  const ph = t.walk || 0;
  // legs (stubby, scaly)
  c.fillStyle = '#7d8450';
  if (lg > 0.05) for (const [lx, a] of [[-40, Math.sin(ph) * 0.5], [38, -Math.sin(ph) * 0.5]]) { c.save(); c.translate(lx, -6); c.rotate(a + (t.paddle || 0) * Math.sin(ph * 2)); c.beginPath(); c.ellipse(0, 6 * lg, 11, 10 * lg + 2, 0, 0, 7); c.fill(); c.fillStyle = '#5d6338'; c.fillRect(-7, 12 * lg, 3, 3); c.fillRect(0, 13 * lg, 3, 3); c.fillStyle = '#7d8450'; c.restore(); }
  if (nk > 0.12) {
  // neck + head
  const hx = 50 + 34 * nk, hy = -18 - 8 * nk + (t.headDY || 0);
  c.strokeStyle = '#838b51'; c.lineWidth = 17; c.lineCap = 'round'; c.beginPath(); c.moveTo(38, -16); c.quadraticCurveTo(50 + 20 * nk, -14, hx - 4, hy + 2); c.stroke();
  c.fillStyle = '#939b5c'; c.beginPath(); c.ellipse(hx + 8, hy - 2, 18, 13.5, -0.1, 0, 7); c.fill();
  c.fillStyle = '#6e7542'; for (const [sx, sy] of [[0, -8], [10, -12], [-4, 2], [14, 4]]) { c.beginPath(); c.arc(hx + sx, hy + sy, 2.2, 0, 7); c.fill(); }
  const ex = hx + 13, ey = hy - 7, er = 6.2 * (t.eyeS || 1);
  c.fillStyle = '#f4f0dd'; c.beginPath(); c.arc(ex, ey, er, 0, 7); c.fill();
  c.fillStyle = '#16120e'; c.beginPath(); c.arc(ex + 1.6 + (t.gx || 0) * 2, ey + (t.gy || 0) * 2, er * 0.55, 0, 7); c.fill();
  c.fillStyle = '#fff'; c.beginPath(); c.arc(ex + 0.4, ey - 2, 1.3, 0, 7); c.fill();
  const lid = clamp(t.lid || 0); if (lid > 0) { c.fillStyle = '#7f8750'; c.fillRect(ex - er - 1, ey - er - 1, 2 * er + 2, (2 * er + 2) * lid); c.strokeStyle = '#3d4123'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(ex - er, ey - er + (2 * er) * lid); c.lineTo(ex + er, ey - er + 2 * er * lid); c.stroke(); }
  c.strokeStyle = '#3d4123'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(hx + 14, hy + 3); c.quadraticCurveTo(hx + 20, hy + 7, hx + 25, hy + 2); c.stroke();
  }
  // tail
  c.fillStyle = '#7d8450'; c.beginPath(); c.moveTo(-60, -6); c.lineTo(-76, -2); c.lineTo(-58, 0); c.fill();
  // shell dome
  const sh = new Path2D(); sh.moveTo(-66, 0); sh.bezierCurveTo(-62, -42, -32, -56, 0, -56); sh.bezierCurveTo(32, -56, 62, -42, 66, 0); sh.closePath();
  c.fillStyle = '#56633a'; c.fill(sh);
  c.save(); c.clip(sh);
  const hexa = (cx, cy, r) => { c.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; c.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.8); } c.closePath(); };
  for (const [cx, cy, r] of [[-30, -34, 17], [0, -40, 18], [30, -34, 17], [-50, -12, 14], [-16, -10, 15], [16, -10, 15], [50, -12, 14]]) { hexa(cx, cy, r); c.fillStyle = '#6c7a45'; c.fill(); c.strokeStyle = '#2f3a1f'; c.lineWidth = 2.6; c.stroke(); hexa(cx, cy, r * 0.5); c.fillStyle = '#7d8b52'; c.fill(); }
  c.fillStyle = '#3c4727'; c.fillRect(-70, -7, 140, 8); c.strokeStyle = '#2a3219'; c.lineWidth = 1.5; for (let x = -60; x < 64; x += 12) { c.beginPath(); c.moveTo(x, -7); c.lineTo(x, 1); c.stroke(); }
  const moss = t.moss || 0;
  if (moss > 0) { const r = mulberry(17); for (let i = 0; i < 46; i++) { const a = Math.PI + r() * Math.PI, d = 30 + r() * 30; c.fillStyle = `rgba(${60 + r() * 30},${100 + r() * 40},${55 + r() * 20},${moss})`; c.beginPath(); c.ellipse(Math.cos(a) * d * 1.1, -10 + Math.sin(a) * d * 0.8, 6 + r() * 8, 3 + r() * 4, 0, 0, 7); c.fill(); } c.fillStyle = `rgba(78,84,82,${0.78 * moss})`; c.fillRect(-70, -60, 140, 60); for (let i = 0; i < 30; i++) { c.fillStyle = `rgba(${r() > 0.5 ? '120,126,130' : '50,56,54'},${0.5 * moss})`; c.beginPath(); c.arc((r() - 0.5) * 120, -r() * 50, 2 + r() * 5, 0, 7); c.fill(); } }
  c.restore();
  selfShadow(c, sh, 6, 'rgba(8,10,4,0.45)'); rimLight(c, sh, 2.5, 'rgba(210,225,200,0.4)');
  if (t.shine) { c.save(); c.clip(sh); c.fillStyle = `rgba(235,245,210,${0.45 * t.shine})`; c.beginPath(); c.ellipse(14, -40, 26, 9, -0.3, 0, 7); c.fill(); c.fillStyle = `rgba(255,255,240,${0.8 * t.shine})`; c.beginPath(); c.ellipse(20, -44, 10, 3.5, -0.3, 0, 7); c.fill(); c.restore(); }
  if (moss > 0.3) { c.strokeStyle = `rgba(60,110,70,${moss})`; c.lineWidth = 1.5; for (const x of [-40, -12, 22, 48]) { c.beginPath(); c.moveTo(x, -4); c.quadraticCurveTo(x + 3, 6, x - 1, 14); c.stroke(); } }
  c.restore();
}
function drawFish(c, x, y, rot, wag, s = 1) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  c.save(); c.translate(-24, 0); c.rotate(wag); c.fillStyle = '#b85f26'; c.beginPath(); c.moveTo(2, 0); c.lineTo(-18, -13); c.quadraticCurveTo(-12, 0, -18, 13); c.closePath(); c.fill(); c.restore();
  const b = new Path2D(); b.ellipse(0, 0, 27, 12, 0, 0, 7); c.fillStyle = '#d4782f'; c.fill(b);
  c.save(); c.clip(b); c.fillStyle = '#efc07a'; c.fillRect(-30, 4, 60, 12); c.strokeStyle = 'rgba(120,50,10,0.6)'; c.lineWidth = 1; for (let i = -18; i < 18; i += 6) { c.beginPath(); c.arc(i, -2, 5, -1.2, 1.2); c.stroke(); } c.restore();
  c.fillStyle = '#b85f26'; c.beginPath(); c.moveTo(-6, -11); c.lineTo(4, -20); c.lineTo(10, -10); c.fill();
  c.fillStyle = '#fff'; c.beginPath(); c.arc(16, -3, 4, 0, 7); c.fill(); c.fillStyle = '#111'; c.beginPath(); c.arc(17, -3, 2.2, 0, 7); c.fill();
  c.strokeStyle = '#7a3812'; c.lineWidth = 1.4; c.beginPath(); c.arc(26, 2, 3, 2.4, 4); c.stroke();
  c.restore();
}
function drawSparrow(c, x, y, flap, dir = 1, s = 1) {
  c.save(); c.translate(x, y); c.scale(dir * s, s);
  c.fillStyle = '#5e4632'; c.beginPath(); c.moveTo(-9, 0); c.lineTo(-17, -3); c.lineTo(-16, 3); c.fill();
  c.fillStyle = '#80634a'; c.beginPath(); c.ellipse(0, 0, 10, 6.5, -0.1, 0, 7); c.fill(); c.fillStyle = '#d9c7a6'; c.beginPath(); c.ellipse(2, 3, 7, 3, 0, 0, 7); c.fill();
  c.fillStyle = '#80634a'; c.beginPath(); c.arc(9, -4, 5.2, 0, 7); c.fill(); c.fillStyle = '#e7a23a'; c.beginPath(); c.moveTo(13.5, -5); c.lineTo(18, -3.5); c.lineTo(13.5, -2.5); c.fill();
  c.fillStyle = '#111'; c.beginPath(); c.arc(10.5, -5, 1.2, 0, 7); c.fill();
  const a = Math.sin(flap) * 1.1;
  for (const [k, col] of [[0.3, '#4e3a28'], [0, '#6b503a']]) { c.save(); c.translate(-1, -3); c.rotate(-0.4 - a + k); c.fillStyle = col; c.beginPath(); c.ellipse(-6, 0, 10, 3.5, 0, 0, 7); c.fill(); c.restore(); }
  c.restore();
}
function surfaceBubbles(c, T, x, times, s = 1) {
  for (let i = 0; i < times.length; i++) {
    const a = T - times[i]; if (a < 0 || a > 0.5) continue;
    const r = (4 + (i % 3) * 3) * s; const xx = x + ((i * 37) % 30) - 15;
    if (a < 0.3) { c.fillStyle = 'rgba(190,206,236,0.75)'; c.beginPath(); c.arc(xx, WATER_Y - r * Math.sin(Math.PI * a / 0.3) * 0.8, r, Math.PI, 0); c.fill(); c.strokeStyle = 'rgba(240,245,255,0.8)'; c.lineWidth = 1; c.stroke(); }
    else { const u = (a - 0.3) / 0.2; c.strokeStyle = `rgba(200,215,240,${1 - u})`; c.lineWidth = 1.2; c.beginPath(); c.ellipse(xx, WATER_Y, r + u * 12, (r + u * 12) * 0.25, 0, 0, 7); c.stroke(); }
  }
}
// ---------- owl helper poses ----------
const owlStand = (x) => Object.assign({ yaw: 0.8, sq: 1, lean: 0, gx: 0.4, gy: 0.1, twig: true, ruffle: 0.25 }, SIT_FEET, x);
function walkPose(ph, amp = 12, extra) {
  return Object.assign(owlStand({}), { footN: { x: 14 + amp * Math.sin(ph), y: -Math.max(0, Math.cos(ph)) * 7 }, footF: { x: 22 + amp * Math.sin(ph + Math.PI), y: -2 - Math.max(0, Math.cos(ph + Math.PI)) * 7 }, hdy: -2 * Math.abs(Math.sin(ph)), lean: 0.05 * Math.sin(ph * 2) }, extra);
}
function flyPose(ph, extra) {
  const d = (1 - Math.cos(ph)) / 2; // 0 up .. 1 down
  const o = Object.assign({ lean: 0.95, sq: 1.04, yaw: 0.7, tilt: 0, gx: 0.6, gy: 0, twig: true, ruffle: 0.2, footN: { x: -8, y: -4 }, footF: { x: -2, y: -6 }, tuft: -0.5 }, extra);
  const B = owlBody(o); const S = B.bp(12, -80);
  o.wingN = { x: S.x + lerp(-18, 30, d), y: S.y + lerp(-120, 60, d), ext: 1 };
  o.wingF = { x: S.x + lerp(-24, 22, d) - 6, y: S.y + lerp(-115, 55, d) - 4, ext: 1 };
  return o;
}
function owlW(c, o, x, y, dir, rot) { drawOwlWorld(c, o, x, y, dir, rot || 0); }
const gyAt = x => OWL_SIT_Y(x);

// ================= transitions: a rider sweeps across and wipes to the next scene =================
let offOld = null, offNew = null;
function frameOf(T) { const s = shotAt(T); const S = s.fn(T - s.t0, T); if (S.custom) S.custom(); else compose(T, S); }
function wipeShot(T, Told, Tnew, riderX, drawRider, vx, gradeName) {
  if (!offOld) { offOld = mk(W, H); offNew = mk(W, H); }
  frameOf(Told); offOld.getContext('2d').drawImage(cv, 0, 0);
  frameOf(Tnew); offNew.getContext('2d').drawImage(cv, 0, 0);
  const c = ctx; c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
  c.drawImage(offOld, 0, 0);
  const wx = clamp(riderX - 120, 0, W);
  c.save(); c.beginPath(); c.rect(0, 0, wx, H); c.clip(); c.drawImage(offNew, 0, 0); c.restore();
  // a ragged edge of dust and spray along the wipe
  const r = mulberry(Math.floor(T * 24));
  for (let i = 0; i < 40; i++) { const y = r() * H; c.fillStyle = r() > 0.5 ? 'rgba(20,26,50,0.5)' : 'rgba(190,205,235,0.35)'; c.beginPath(); c.arc(wx + (r() - 0.7) * 30, y, 2 + r() * 6, 0, 7); c.fill(); }
  // rider, tinted like the scene it brings in, then smeared along its speed
  aA.setTransform(1, 0, 0, 1, 0, 0); aA.globalCompositeOperation = 'source-over'; aA.clearRect(0, 0, W, H); drawRider(aA);
  aA.globalCompositeOperation = 'source-atop'; aA.globalAlpha = 0.28; aA.fillStyle = '#1a2250'; aA.fillRect(0, 0, W, H); aA.globalAlpha = 1; aA.globalCompositeOperation = 'source-over';
  aB.setTransform(1, 0, 0, 1, 0, 0); aB.clearRect(0, 0, W, H);
  const n = Math.min(10, 2 + Math.ceil(Math.abs(vx) / 500)); aB.globalCompositeOperation = 'lighter'; aB.globalAlpha = 1 / n;
  for (let i = 0; i < n; i++) aB.drawImage(actA, vx / 60 * (i / (n - 1) - 0.5), 0);
  aB.globalAlpha = 1; aB.globalCompositeOperation = 'source-over';
  c.drawImage(actB, 0, 0);
}
const RIDE_CAM = { x: 0, y: 0, z: 2.0, raw: true };
function riderBike(sx, sy, rot) { const R = { x: (sx - W / 2) / 2, y: (sy - H / 2) / 2 }; return { R, F: { x: R.x + WB, y: R.y }, rotR: rot, rotF: rot + 0.7, dir: 1, omega: 30, comp: 0, stand: 0 }; }
shot('t1', P2.T1, P2.S2, (lt, T) => ({
  custom: () => {
    const u = lt / (P2.S2 - P2.T1); const sx = lerp(-650, 2650, sineInOut(u) * 0.35 + u * 0.65);
    const vx = 3300 / 2 * 1.2;
    wipeShot(T, 29.999, P2.S2 + 0.001, sx, (x) => {
      camT(x, RIDE_CAM); const b = riderBike(sx, 930, sx / 84); b.shakeY = idleShake(T, 1.2, 30);
      const o = ride({ wet: 1, lean: 0.38, sq: 0.94, yaw: 0.7, gx: 0.8, gy: 0.2, lid: 0.45, twig: true, tuft: -0.3 });
      drawBikeOwl(x, b, o);
      const ex = bikeToWorld(b, -66, -33); const r = mulberry(5);
      for (let i = 0; i < 26; i++) { const a = ((T * 5 + i / 26) % 1) * 0.5; x.fillStyle = 'rgba(190,206,236,0.85)'; x.beginPath(); x.arc(ex.x - 300 * a - r() * 20, ex.y + (r() - 0.5) * 10 - 120 * a + 0.5 * 900 * a * a, 2 + r() * 2.5, 0, 7); x.fill(); }
      drops(x, T, [[b.R.x + 40, b.R.y - 200], [b.R.x + 80, b.R.y - 230]], { stop: b.R.y + 40 });
    }, vx, 'cool');
  }
}));

// ================= SCENE 2: Fishing for a Bike =================
const S2 = P2.S2; const L2 = T => T - S2;
Object.assign(EV2, {
  bubbles: [0.3, 0.9, 1.4, 2.0, 2.4].map(x => x + S2), teeter: S2 + 5.2, flop1: S2 + 5.95, surface1: S2 + 6.75, spit1: S2 + 7.4, idea: S2 + 8.3,
  hop: S2 + 8.9, hopLand: S2 + 9.35, tug: [10.8, 11.2].map(x => x + S2), yank: S2 + 12.9, fishOut: S2 + 13.0, slap: [13.25, 13.5].map(x => x + S2), fishSplash: S2 + 13.95, fallBack: S2 + 14.3,
  glare: S2 + 16.9, crouch: S2 + 18.6, dive: S2 + 19.3, diveSplash: S2 + 19.8, bubbles2: [20.4, 20.9, 21.2].map(x => x + S2), feetUp: S2 + 21.6,
  rockRise: S2 + 23.5, headOut: S2 + 23.9, blink: S2 + 24.6, owlUp: S2 + 24.9, nod: S2 + 26.2, turtleDive: S2 + 26.5, bikeRise: S2 + 28.0,
  hug: S2 + 30.6, turtleHop: S2 + 32.4, engine: S2 + 33.2, roll: S2 + 33.4, emptyHug: S2 + 34.3
});
RIPPLES.push({ t: EV2.flop1, x: 2040, s: 1 }, { t: EV2.surface1, x: 2030, s: 0.5 }, { t: EV2.hopLand, x: TR, s: 0.4 }, { t: EV2.fishSplash, x: 1990, s: 0.6 }, { t: EV2.diveSplash, x: 2010, s: 1.2 }, { t: EV2.feetUp, x: 2010, s: 0.4 }, { t: EV2.rockRise, x: TR, s: 0.6 }, { t: EV2.turtleDive, x: TR, s: 0.8 }, { t: EV2.bikeRise, x: 2050, s: 1 });
for (const t of EV2.bubbles.concat(EV2.bubbles2)) RIPPLES.push({ t, x: BX, s: 0.2 });
const wetAt = T => clamp(1 - (T - S2) / 26, 0.35, 1);
// turtle bob: the "rock" reacts a little whenever the owl lands on it (planted clue)
function rockY(T) { let y = 808; for (const t of [EV2.hopLand, EV2.fallBack]) y += 6 * Math.max(0, wobble(T - t, 1.6, 2.5)); if (T > EV2.rockRise) y -= 18 * spring(T - EV2.rockRise, 8, 0.6); if (T > EV2.turtleDive) y += 90 * quadIn((T - EV2.turtleDive) / 0.5); return y; }
function rockTurtle(T, extra) { return Object.assign({ x: TR, y: rockY(T), dir: 1, neck: 0, legs: 0, moss: 1, lid: 0.3 }, extra); }
function s2grade(T) {
  const L = L2(T);
  if (L < 16) return gradeMix('cool', 'wet', clamp((L - 6) / 2));
  if (L < 23) return gradeMix('wet', 'anger', clamp((L - 16.5) / 1));
  if (L < 28) return gradeMix('anger', 'silver', clamp((L - 23) / 1));
  return gradeMix('silver', 'warm', clamp((L - 28) / 1.2));
}
const s2moon = (x, y, r) => ({ x, y, r });
function sceneS(T, cam, actors, opt = {}) { return Object.assign({ cam, moon: opt.moon || s2moon(1050, 140, 140), grade: opt.grade || s2grade(T), pond: true, actors, front: opt.front, back: opt.back, water: opt.water }, opt.extra || {}); }

shot('s2a', S2, S2 + 3.0, (lt, T) => {
  const o = owlStand({
    wet: wetAt(T), yaw: trk(lt, [[0, 0.9], [0.55, 0.75, 10, 0.7]]), gx: trk(lt, [[0, 0.3], [0.4, 0.9, 20, 0.8]]), gy: trk(lt, [[0, 0], [0.4, 0.7, 20, 0.8]]),
    tilt: trk(lt, [[0, 0], [0.55, 0.3, 10, 0.7], [2.2, 0.05, 10, 0.7]]), lid: trk(lt, [[0, 0.45], [1.6, 0.3, 20, 0.8]]) + bump(lt, 1.1, 0.16), angry: trk(lt, [[0, 0], [1.6, 0.5, 20, 0.8]]),
    sq: trk(lt, [[0, 0.95], [2.0, 0.85, 14, 0.6], [2.2, 1.06, 14, 0.4]]), lean: trk(lt, [[0, 0], [2.2, 0.1, 10, 0.6]])
  });
  return sceneS(T, { x: 2000, y: 690, z: 1.5 }, [c => drawTurtle(c, rockTurtle(T)), c => shadowAt(c, SB, 0, 44), c => owlW(c, o, SB, gyAt(SB), -1)], { front: c => { surfaceBubbles(c, T, BX, EV2.bubbles); drops(c, T, [[SB - 20, gyAt(SB) - 40], [SB + 18, gyAt(SB) - 60]], { stop: gyAt(SB) + 4 }); } });
});
shot('s2b', S2 + 3.0, S2 + 6.6, (lt, T) => {
  const L = L2(T); const fall = clamp((L - 5.6) / 0.35);
  const reach = tw(L, [[0, 0], [3.4, 1, 0.5, expoOut]]);
  const lean = L < 5.6 ? trk(L, [[0, 0.05], [3.4, 0.35, 8, 0.7], [4.3, 0.55, 6, 0.7], [5.0, 0.7, 6, 0.7]]) + 0.05 * Math.sin(L * 14) * bump(L, 5.1, 0.5) : 0.7;
  const o = owlStand({ wet: wetAt(T), lean, sq: trk(L, [[0, 1], [4.3, 1.12, 8, 0.6]]), yaw: 0.9, gx: 0.7, gy: 0.9, tilt: 0.4, eyeS: trk(L, [[0, 1], [5.3, 1.3, 20, 0.5]]), lid: L > 5.3 ? 0 : 0.3,
    wingN: reach > 0.01 ? { x: lerp(30, 72, reach), y: lerp(-40, 30, reach), ext: reach } : null });
  const x = SB - 60 * fall * fall, y = gyAt(SB) + 70 * fall * fall;
  const actors = L < 5.95 ? [c => drawTurtle(c, rockTurtle(T)), c => shadowAt(c, SB, 0, 44), c => owlW(c, o, x, y, -1, -1.4 * quadIn(fall))] : [c => drawTurtle(c, rockTurtle(T))];
  return sceneS(T, { x: 2040, y: 730, z: 2.6, sy: L > 5.95 ? 4 * wobble(L - 5.95, 12, 8) : 0 }, actors, { front: c => { splash(c, T, { t: EV2.flop1, x: 2030, y: WATER_Y, s: 0.8, seed: 21 }); } });
});
shot('s2c', S2 + 6.6, S2 + 8.6, (lt, T) => {
  const L = L2(T); const hy = trk(L, [[0, 900], [6.75, 818, 11, 0.45]]);
  const o = owlStand({ wet: 1, yaw: 0.35, lid: 0.5, sq: 0.95, gx: trk(L, [[0, 0.3], [7.9, 1, 22, 0.8]]), gy: 0.1, tilt: trk(L, [[0, 0.1], [8.05, -0.1, 12, 0.7]]), mouth: bump(L, 7.3, 0.3) * 0.8, puff: bump(L, 7.0, 0.35) * 0.4, angry: trk(L, [[0, 0], [8.3, 0.6, 20, 0.8]]), hsx: 1 + 0.1 * bump(L, 7.0, 0.35) });
  return sceneS(T, { x: 2000, y: 750, z: 2.8 }, [c => drawTurtle(c, rockTurtle(T)), c => owlW(c, o, 2030, hy, -1)], {
    front: c => { drops(c, T, [[2010, hy - 60], [2050, hy - 80], [2030, hy - 140]], { stop: 794 }); if (L > 7.35) { const r = mulberry(3); for (let i = 0; i < 18; i++) { const a = L - 7.35 - i * 0.008; if (a < 0 || a > 0.5) continue; const x = 1995 - (300 + r() * 80) * a, y = hy - 118 - 140 * a + 0.5 * G * a * a; if (y < 794) { c.fillStyle = 'rgba(190,206,236,0.9)'; c.beginPath(); c.arc(x, y, 2.4, 0, 7); c.fill(); } } } }
  });
});
const ROCK_TOP = T => rockY(T) - 56;
shot('s2d', S2 + 8.6, S2 + 12.8, (lt, T) => {
  const L = L2(T); const u = clamp((L - 8.9) / 0.45);
  const x = lerp(2030, TR, u), y = u < 1 ? lerp(818, ROCK_TOP(T), u) - 80 * Math.sin(Math.PI * u) : ROCK_TOP(T);
  const reach = tw(L, [[0, 0], [10.0, 1, 0.3, expoOut]]);
  const tug = Math.max(0, wobble(L - 10.8, 6, 6)) + Math.max(0, wobble(L - 11.2, 6, 6));
  const o = owlStand({ wet: wetAt(T), sq: L < 9.35 ? (L < 8.9 ? trk(L, [[0, 1], [8.75, 0.82, 14, 0.6]]) : 1.12) : trk(L, [[0, 0.75], [9.36, 1, 12, 0.45]]), yaw: 0.8, gx: 0.6, gy: 0.8, tilt: 0.35,
    lean: L < 10 ? 0.05 : 0.55 + 0.15 * tug - 0.5 * tw(L, [[0, 0], [11.8, 1, 0.5, expoInOut]]), angry: 0.5, lid: 0.25,
    wingN: reach > 0 ? { x: lerp(30, 95, reach), y: lerp(-40, 70 - 20 * tug, reach), ext: reach } : null, tuft: ftrk(L, [[0, 0], [9.35, 0.8]], 14, 5) });
  return sceneS(T, { x: 1990, y: 700, z: 1.7 }, [c => drawTurtle(c, rockTurtle(T)), c => owlW(c, o, x, y, 1)], { front: c => { if (L > 10.8) surfaceBubbles(c, T, 1995, [S2 + 10.8, S2 + 11.2, S2 + 11.6]); } });
});
shot('s2e', S2 + 12.8, S2 + 16.3, (lt, T) => {
  const L = L2(T);
  const fu = clamp((L - 13.0) / 0.25); const fishOut = L >= 13.0 && L < 13.95;
  let fx = lerp(1995, 1960, fu), fy = lerp(800, 690, fu), frot = -1.2 + 1.2 * fu, wag = Math.sin(L * 40) * 0.6;
  if (L > 13.55) { const a = clamp((L - 13.55) / 0.4); fx = lerp(1960, 1990, a); fy = lerp(690, 805, a * a); frot = 1.3 * a; }
  const slapA = Math.max(0, wobble(L - 13.25, 4, 6)) - Math.max(0, wobble(L - 13.5, 4, 6));
  const back = clamp((L - 14.1) / 0.3);
  const o = owlStand({ wet: wetAt(T), yaw: 0.8 + 0.9 * slapA, hsx: 1 - 0.15 * Math.abs(slapA), lean: -0.3 * tw(L, [[0, 0], [12.85, 1, 0.15, expoOut]]), eyeS: L > 13.1 ? 1.3 : 1, lid: L > 13.7 ? 0.5 : 0, gx: 0.6, gy: L > 13.6 ? 0.4 * Math.cos(L * 9) : 0.3,
    sq: L > 14.4 ? trk(L, [[14.4, 0.8], [14.41, 1, 12, 0.5]]) : 1, footN: back > 0 ? { x: 30, y: -40 * back } : SIT_FEET.footN, footF: back > 0 ? { x: 34, y: -46 * back } : SIT_FEET.footF });
  const ox = TR - 10 * back, oy = ROCK_TOP(T) + 8 * back;
  return sceneS(T, { x: 1950, y: 715, z: 2.4, sx: L > 13.25 && L < 13.8 ? 5 * wobble(L - 13.25, 14, 8) : 0 }, [c => drawTurtle(c, rockTurtle(T)), c => owlW(c, o, ox, oy, 1, -1.45 * quadIn(back))], {
    front: c => { if (fishOut) drawFish(c, fx, fy, frot, wag, 1.1); splash(c, T, { t: EV2.fishSplash, x: 1990, y: WATER_Y, s: 0.45, seed: 5 }); if (L > 13.25 && L < 13.7) { c.fillStyle = 'rgba(190,206,236,0.9)'; const r = mulberry(8); for (let i = 0; i < 10; i++) { c.beginPath(); c.arc(1930 + r() * 40, 680 + r() * 30, 2, 0, 7); c.fill(); } } }
  });
});
shot('s2f', S2 + 16.3, S2 + 18.3, (lt, T) => {
  const L = L2(T); const up = clamp((L - 16.9) / 0.25);
  const o = owlStand({ wet: wetAt(T), yaw: 0.6, lid: trk(L, [[0, 0.5], [16.6, 0.35, 24, 0.8]]), angry: trk(L, [[0, 0], [16.6, 1, 24, 0.8]]), gx: trk(L, [[0, 0.2], [17.5, 0.9, 20, 0.8]]), gy: trk(L, [[0, 0], [17.5, 0.6, 20, 0.8]]), tilt: trk(L, [[0, 0], [17.6, 0.25, 12, 0.7]]),
    sq: up >= 1 ? trk(L, [[17.15, 1.1], [17.16, 1, 12, 0.4]]) : 1, puff: bump(L, 17.7, 0.4) * 0.4, footN: up < 1 ? { x: 30, y: -40 * (1 - up) } : SIT_FEET.footN, footF: up < 1 ? { x: 34, y: -46 * (1 - up) } : SIT_FEET.footF });
  const ox = TR - 10 * (1 - up);
  return sceneS(T, { x: 1925, y: 640, z: 3.4 }, [c => drawTurtle(c, rockTurtle(T)), c => owlW(c, o, ox, ROCK_TOP(T) + 8 * (1 - up), 1, -1.45 * (1 - sineInOut(up)))]);
});
shot('s2g', S2 + 18.3, S2 + 23.0, (lt, T) => {
  const L = L2(T); const u = clamp((L - 19.3) / 0.5);
  const actors = [c => drawTurtle(c, rockTurtle(T))];
  if (L < 19.8) {
    const x = lerp(TR, 2010, u), y = lerp(ROCK_TOP(T), 800, u) - 110 * Math.sin(Math.PI * u);
    const o = owlStand({ wet: wetAt(T), angry: 1, lid: 0.35, gx: 0.8, gy: 0.5, yaw: 0.8, tilt: 0.2, sq: L < 19.3 ? trk(L, [[0, 1], [18.6, 0.74, 10, 0.6]]) : 1.25, lean: L < 19.3 ? trk(L, [[0, 0.05], [18.6, 0.45, 10, 0.6]]) : 0, tuft: L > 19.3 ? -1 : 0,
      wingN: L > 19.3 ? { x: 70, y: -160, ext: 0.9 } : null, wingF: L > 19.3 ? { x: 60, y: -165, ext: 0.9 } : null });
    actors.push(c => owlW(c, o, x, y, 1, L < 19.3 ? 0 : 1.7 * sineInOut(u)));
  } else if (L > 21.6) {
    const bob = 4 * Math.sin((L - 21.6) * 5);
    const o = owlStand({ wet: 1, footN: { x: 8, y: 34 }, footF: { x: -4, y: 32 } });
    actors.push(c => owlW(c, o, 2010, trk(L, [[21.6, 860], [21.61, 800, 10, 0.4]]) + bob, 1, Math.PI));
  }
  return sceneS(T, { x: 1980, y: 700, z: 1.6 }, actors, { front: c => { splash(c, T, { t: EV2.diveSplash, x: 2010, y: WATER_Y, s: 1.3, seed: 41 }); surfaceBubbles(c, T, 2010, EV2.bubbles2, 1.3); } });
});
shot('s2h', S2 + 23.0, S2 + 26.0, (lt, T) => {
  const L = L2(T); const up = clamp((L - 24.9) / 0.22);
  const t = rockTurtle(T, { neck: tw(L, [[0, 0], [23.9, 1, 0.35, expoOut]]), legs: 0.4, gx: -0.2, gy: 0.4, lid: L < 24.6 ? 0 : bump(L, 24.6, 0.18) + bump(L, 25.4, 0.16), moss: 0.9, headDY: 6 });
  const bob = 4 * Math.sin((L - 21.6) * 5);
  const o = up <= 0 ? owlStand({ wet: 1, footN: { x: 8, y: 34 }, footF: { x: -4, y: 32 } }) : owlStand({ wet: 1, yaw: 0.2, eyeS: 1.25, gx: -0.8, gy: 0.3, lid: bump(L, 25.4, 0.16), puff: 0 });
  const actors = [c => drawTurtle(c, t), c => owlW(c, o, 2010, up <= 0 ? 800 + bob : 800 - 20 * sineInOut(up), up <= 0 ? 1 : -1, up <= 0 ? Math.PI : 0)];
  return sceneS(T, { x: 1960, y: 745, z: 2.6 }, actors);
});
function bikeOnShell(T) { const a = T - EV2.bikeRise; const y = lerp(900, 712, expoOut(clamp(a / 0.8))); return { R: { x: 1945, y }, F: { x: 1945 + WB, y: y - 4 }, rotR: 0, rotF: 0.4, dir: 1, omega: 0 }; }
shot('s2i', S2 + 26.0, S2 + 30.5, (lt, T) => {
  const L = L2(T);
  const actors = [];
  const nod = bump(L, 26.2, 0.25);
  if (L < 27.0) actors.push(c => drawTurtle(c, rockTurtle(T, { neck: 1, legs: 0.4, headDY: 6 + 8 * nod, moss: 0.9 })));
  if (L > 28.0) { const ty = lerp(900, 806, expoOut(clamp((L - 28) / 0.8))); actors.push(c => drawBikeOwl(c, bikeOnShell(T), null)); actors.push(c => drawTurtle(c, { x: 2060, y: ty, dir: 1, neck: 0.7, legs: 0.5, moss: 0.8, lid: 0.2, headDY: 4 })); }
  const o = owlStand({ wet: 0.9, yaw: trk(L, [[0, 0.2], [27.2, 0.5, 10, 0.7]]), gx: trk(L, [[0, -0.6], [26.6, 0.1, 18, 0.8], [28.1, 0.6, 18, 0.8]]), gy: trk(L, [[0, 0.3], [26.6, 0.8, 18, 0.8], [28.1, -0.2, 18, 0.8]]), eyeS: trk(L, [[0, 1.1], [28.3, 1.35, 16, 0.5]]), mouth: L > 28.4 ? 0.5 : 0, puff: bump(L, 28.6, 0.5) * 0.5 });
  return sceneS(T, { x: 2030, y: 700, z: 1.7 }, actors.concat([c => owlW(c, o, 2005, 790, 1)]), { front: c => { if (L > 26.6) surfaceBubbles(c, T, TR + 40, [S2 + 26.7, S2 + 27.1, S2 + 27.5, S2 + 27.8]); splash(c, T, { t: EV2.bikeRise, x: 2060, y: WATER_Y, s: 0.7, seed: 13 }); } });
});
// the turtle's bike, now parked on the bank, then ridden slowly away (continues through T2 and scene 3)
function TBX(T) {
  let x = 2180; if (T > EV2.roll) x += 12 * (T - EV2.roll);
  const lurch = P2.S3 + 5.6; if (T > lurch) x += 70 * expoOut((T - lurch) / 0.45);
  const g = P2.S3 + 31.0; if (T > g) x += 0.5 * 120 * (T - g) * (T - g);
  return x;
}
function turtleRider(T, extra) { return Object.assign({ x: 0, y: 0, dir: 1, neck: 1, legs: 0.3, moss: 0.6, lid: 0.15, headDY: -6 }, extra); }
function turtleBike(T, textra) {
  const b = bikeGround(TBX(T), 1); b.omega = T > EV2.roll ? 3 : 0; b.stand = T < EV2.roll ? 1 : 0;
  if (T > EV2.engine) b.shakeY = idleShake(T, 0.5, 14);
  b.extra = (c) => { c.save(); c.translate(70, -104); c.rotate(-0.12); c.scale(0.8, 0.8); drawTurtle(c, turtleRider(T, textra)); c.restore(); };
  return b;
}
shot('s2j', S2 + 30.5, P2.T2, (lt, T) => {
  const L = L2(T);
  const on = L > 32.8;
  const b = on ? turtleBike(T) : (() => { const b = bikeGround(2180, 1); b.stand = 1; return b; })();
  const tw_ = clamp((L - 31.0) / 1.3), hop = clamp((L - 32.4) / 0.4);
  const seat = bikeToWorld(b, 70, -104);
  const tx = L < 32.4 ? lerp(2040, 2140, tw_) : lerp(2140, seat.x, hop), ty = L < 32.4 ? gyAt(lerp(2040, 2140, tw_)) + 6 : lerp(gyAt(2140) + 6, seat.y, hop) - 60 * Math.sin(Math.PI * hop);
  const tank = { x: 2318, y: gyAt(2318) - 112 };
  const hugT = { x: -(tank.x - 2350) + 6, y: tank.y - gyAt(2350) + 4 };
  const emptyA = T > EV2.emptyHug;
  const o = owlStand({ wet: 0.6, yaw: emptyA ? trk(T, [[0, 0.8], [EV2.emptyHug + 0.3, 0.05, 8, 0.85]]) : 0.85, happy: emptyA ? 0 : 1, lid: emptyA ? 0.45 : 0,
    gx: emptyA ? trk(T, [[0, 0.6], [EV2.emptyHug + 0.15, -0.6, 18, 0.8], [EV2.emptyHug + 0.55, 0, 10, 0.9]]) : 0, sq: emptyA ? 1 : 1 + 0.06 * Math.sin(L * 7) * bump(L, 30.7, 1.6),
    lean: 0.25, wingN: { x: hugT.x, y: hugT.y, ext: 1 }, wingF: { x: hugT.x + 8, y: hugT.y - 6, ext: 1 } });
  const actors = [c => bikeShadow(c, b), c => drawBikeOwl(c, b, null)];
  if (!on) actors.push(c => drawTurtle(c, { x: tx, y: ty, dir: 1, neck: 1, legs: 1, walk: L * 9, moss: 0.6, lid: 0.15, headDY: -2, tilt: L > 32.4 ? -0.2 * Math.sin(Math.PI * hop) : 0 }));
  actors.push(c => shadowAt(c, 2350, 0, 44), c => owlW(c, o, 2350, gyAt(2350), -1));
  const pt = []; for (let t = EV2.engine; t < T; t += 0.22) pt.push(t);
  return sceneS(T, { x: 2230, y: 680, z: 2.0 }, actors, { grade: gradeMix('warm', 'warm2', (L - 33.4) / 1), back: c => exhaustPuffs(c, T, pt, t => turtleBike(t), { s: 0.8, a: 0.35 }) });
});
// T2: same sweep, but the turtle putters across at walking pace, the owl trudging beside it
shot('t2', P2.T2, P2.S3, (lt, T) => ({
  custom: () => {
    const sx = lerp(-500, 2500, lt / (P2.S3 - P2.T2));
    wipeShot(T, P2.T2 - 0.001, P2.S3 + 0.001, sx, (x) => {
      camT(x, RIDE_CAM); const b = riderBike(sx, 930, sx / 84); b.shakeY = idleShake(T, 0.6, 14); b.omega = 5;
      b.extra = (c) => { c.save(); c.translate(70, -104); c.rotate(-0.12); c.scale(0.8, 0.8); drawTurtle(c, turtleRider(T, { lid: 0.35 + 0.6 * bump(lt, 2.2, 0.2) })); c.restore(); };
      drawBikeOwl(x, b, null);
      const ox = b.R.x + 280, ph = lt * 7;
      const o = walkPose(ph, 12, { wet: 0.5, lid: 0.5, yaw: trk(lt, [[0, 0.8], [2.6, 0.05, 8, 0.85], [3.6, 0.8, 8, 0.85]]), gx: 0, gy: 0.1 });
      owlW(x, o, ox, b.R.y + WR - 4 + o.hdy * 0, 1);
    }, 1400 / 2, 'warm2');
  }
}));

// ================= SCENE 3: Catch That Turtle =================
const S3 = P2.S3; const L3 = T => T - S3;
Object.assign(EV2, {
  sparrow1: S3 + 1.0, stop: S3 + 2.8, sprint: S3 + 4.0, see: S3 + 5.4, lurch: S3 + 5.6, faceplant: S3 + 5.95, peel: S3 + 8.0,
  perchLook: S3 + 11.8, leap: S3 + 12.2, duck: S3 + 12.45, boing: S3 + 12.6, bounceLand: S3 + 13.4, fume: S3 + 15.2,
  pushStart: S3 + 16.8, proud: S3 + 19.6, rollBack: S3 + 20.1, flatten: S3 + 20.6, peelUp: S3 + 22.0, sparrowLand: S3 + 23.0, sparrowGo: S3 + 23.8, lookWing: S3 + 24.5, realize: S3 + 24.9,
  takeoff: S3 + 25.5, land: S3 + 29.2, joy: S3 + 31.0, liftoff: S3 + 31.6, aloneLook: S3 + 33.9, hoo: S3 + 34.4
});
function s3grade(T) {
  const L = L3(T);
  if (L < 7.5) return gradeMix('cool', 'cool', 0);
  if (L < 20.6) return gradeMix('cool', 'anger', clamp((L - 7.5) / 1.5));
  if (L < 24.6) return gradeMix('grey', 'silver', clamp((L - 22) / 2));
  if (L < 31) return gradeMix('silver', 'warm', clamp((L - 24.6) / 1.2));
  return gradeMix('warm', 'warm2', clamp((L - 32) / 1.5));
}
const s3S = (T, cam, actors, opt = {}) => Object.assign({ cam, moon: opt.moon || { x: 1500, y: 170, r: 140 }, grade: opt.grade || s3grade(T), actors, front: opt.front, back: opt.back }, opt.extra || {});
const sparrowAt = (T) => { const a = T - EV2.sparrow1; return { x: 2150 + 420 * a, y: 430 - 40 * Math.sin(a * 2) }; };
function puttPuffs(T) { const pt = []; for (let t = Math.max(P2.S3, T - 1.4); t < T; t += 0.2) pt.push(Math.floor(t / 0.2) * 0.2); return pt; }
shot('s3a', S3, S3 + 4.0, (lt, T) => {
  const b = turtleBike(T, { lid: 0.3 }); const walking = lt < 2.8;
  const ph = (T - P2.T2) * 7; const ox = TBX(T) + 280 - (walking ? 0 : 12 * (lt - 2.8));
  const o = walking ? walkPose(ph, 12, { wet: 0.4, lid: 0.5, yaw: 0.8 }) : owlStand({ wet: 0.4, yaw: 0.8, lid: trk(lt, [[2.8, 0.5], [3.1, 0.35, 24, 0.8]]), angry: trk(lt, [[2.8, 0], [3.1, 0.8, 24, 0.8]]), gx: 0.6, sq: trk(lt, [[2.8, 1], [3.6, 0.82, 12, 0.6]]), lean: trk(lt, [[2.8, 0], [3.6, 0.4, 12, 0.6]]) });
  return s3S(T, { x: 2380, y: 650, z: 1.5 }, [c => bikeShadow(c, b), c => drawBikeOwl(c, b, null), c => shadowAt(c, ox, 0, 40), c => owlW(c, o, ox, gyAt(ox), 1)], {
    back: c => exhaustPuffs(c, T, puttPuffs(T), t => turtleBike(t), { s: 0.8, a: 0.35 }), front: c => { if (T > EV2.sparrow1 && T < EV2.sparrow1 + 3) { const s = sparrowAt(T); drawSparrow(c, s.x, s.y, T * 40, 1, 1.4); } }
  });
});
shot('s3b', S3 + 4.0, S3 + 7.5, (lt, T) => {
  const L = L3(T); const b = turtleBike(T, { eyeS: L > 5.4 ? 1.35 : 1, lid: L > 5.4 ? 0 : 0.3, gx: L > 5.4 ? -1 : 0 });
  if (L > 5.6 && L < 6.2) b.shakeY = idleShake(T, 2.5, 30);
  const ru = clamp((L - 4.1) / 1.85); const ox = lerp(2140, 2370, ru);
  let o, rot = 0, oy = gyAt(ox);
  if (L < 5.95) o = walkPose((L - 4.1) * 18, 16, { wet: 0.35, lean: 0.4, angry: 0.8, lid: 0.3, yaw: 0.8, gx: 0.8, wingN: L > 5.2 ? { x: 70, y: -60, ext: 1 } : null });
  else { const f = clamp((L - 5.95) / 0.18); rot = 1.35 * f; o = owlStand({ wet: 0.35, sq: trk(L, [[6.1, 0.7], [6.11, 0.9, 10, 0.5]]), lid: 0.6, yaw: 0.9, gx: 0.3, gy: 0.5 }); oy -= -4; }
  const pt = puttPuffs(T); if (L > 5.6) pt.push(S3 + 5.6, S3 + 5.68, S3 + 5.76);
  return s3S(T, { x: 2400, y: 690, z: 2.0, sy: L > 6.1 ? 3 * wobble(L - 6.1, 12, 8) : 0 }, [c => shadowAt(c, ox, 0, 40), c => owlW(c, o, ox, oy, 1, rot), c => bikeShadow(c, b), c => drawBikeOwl(c, b, null)], {
    back: c => exhaustPuffs(c, T, pt, t => turtleBike(t), { s: 1.1, a: 0.45 }), front: c => { if (L > 6.1) { const r = mulberry(4); for (let i = 0; i < 14; i++) { const a = L - 6.1; const x = 2420 + (r() - 0.5) * 50 + (r() - 0.5) * 200 * a, y = gyAt(2420) - (150 + r() * 160) * a + 0.5 * G * a * a; if (y < gyAt(2420) + 2 && a < 0.6) { c.fillStyle = r() > 0.5 ? '#3c5a46' : '#2a2018'; c.fillRect(x, y, 3, 2); } } } }
  });
});
shot('s3c', S3 + 7.5, S3 + 9.0, (lt, T) => {
  const L = L3(T); const up = clamp((L - 8.0) / 0.35);
  const o = owlStand({ wet: 0.3, yaw: 0.35, lid: 0.35, angry: trk(L, [[0, 0.3], [8.3, 1, 20, 0.8]]), gx: 0.9, sq: up >= 1 ? trk(L, [[8.35, 1.08], [8.36, 1, 12, 0.4]]) : 1, puff: bump(L, 8.5, 0.4) * 0.5, ruffle: 0.6 });
  const ox = 2370;
  return s3S(T, { x: ox + 20, y: gyAt(ox) - 100, z: 3.6 }, [c => owlW(c, o, ox, gyAt(ox) + 4 * (1 - up), 1, 1.35 * (1 - sineInOut(up)))], { front: c => { c.strokeStyle = '#3a5a44'; c.lineWidth = 2; const h = owlHeadPos(o); c.beginPath(); c.moveTo(ox + 30 - 20 * up, gyAt(ox) - 50 * up - 8); c.lineTo(ox + 38 - 20 * up, gyAt(ox) - 58 * up - 14); c.stroke(); } });
});
const PERCH = { x: 2455, y: 535 };
shot('s3d', S3 + 9.0, S3 + 15.0, (lt, T) => {
  const L = L3(T); const ducked = T > EV2.duck && T < EV2.bounceLand + 0.6;
  const b = turtleBike(T, { neck: ducked ? 1 - tw(T, [[0, 0], [EV2.duck, 1, 0.08, expoOut]]) : (L > 14 ? 1 : 1), legs: ducked ? 0 : 0.3, gy: L > 12.3 ? -1 : 0, eyeS: L > 12.3 ? 1.3 : 1, lid: L > 12.3 ? 0 : 0.2 });
  const seatTop = bikeToWorld(b, 70, -150);
  let ox, oy, rot = 0, o;
  if (L < 12.2) { ox = PERCH.x; oy = PERCH.y; o = owlStand({ wet: 0.2, angry: 0.9, lid: 0.3, yaw: 0.6, gx: trk(L, [[0, 0.2], [11.8, -0.3, 20, 0.8]]), gy: trk(L, [[0, 0.2], [11.8, 0.95, 20, 0.8]]), tilt: trk(L, [[0, 0], [11.95, 0.35, 12, 0.7]]), sq: trk(L, [[0, 1], [11.9, 0.8, 12, 0.6]]) }); }
  else if (L < 12.6) { const u = (L - 12.2) / 0.4; ox = lerp(PERCH.x, seatTop.x, u); oy = lerp(PERCH.y, seatTop.y, u) - 40 * Math.sin(Math.PI * u); o = owlStand({ sq: 1.15, angry: 1, wingN: { x: 50, y: -160, ext: 0.8 }, wingF: { x: 40, y: -165, ext: 0.8 }, yaw: 0.6, gy: 0.9 }); }
  else if (L < 13.4) { const u = (L - 12.6) / 0.8; ox = lerp(seatTop.x, 2330, u); oy = lerp(seatTop.y, gyAt(2330), u) - 150 * Math.sin(Math.PI * u); rot = -6 * u; o = owlStand({ sq: L < 12.7 ? 0.6 : 1.1, eyeS: 1.3, ruffle: 0.6 }); }
  else { ox = 2330; oy = gyAt(2330); o = owlStand({ sq: trk(L, [[13.4, 0.72], [13.41, 0.95, 12, 0.45]]), lid: 0.55, ruffle: 0.7, yaw: 0.2, gx: 0.4 * Math.cos(L * 9), gy: 0.4 * Math.sin(L * 9), tuft: ftrk(L, [[13.4, 0], [13.4, 0.8]], 14, 5) }); }
  const flip = L > 13.4 ? -1 : 1;
  return s3S(T, { x: 2430, y: 600, z: 1.8 }, [c => bikeShadow(c, b), c => drawBikeOwl(c, b, null), c => owlW(c, o, ox, oy, L > 13.4 ? 1 : 1, rot)], { treeRot: 0.012 * wobble(L - 12.2, 2, 3), back: c => exhaustPuffs(c, T, puttPuffs(T), t => turtleBike(t), { s: 0.8, a: 0.35 }), extra: { treeRot: 0.012 * wobble(L - 12.2, 2, 3) } });
});
shot('s3e', S3 + 15.0, S3 + 16.5, (lt, T) => {
  const L = L3(T); const o = owlStand({ ruffle: 0.7, angry: 1, lid: 0.35, yaw: 0.5, gx: 0.9, gy: 0.1, puff: tw(L, [[0, 0], [15.2, 1, 0.3, expoOut]]) * 0.8, hsx: 1 + 0.08 * Math.sin(L * 50) * bump(L, 15.3, 1), sq: 1 + 0.03 * Math.sin(L * 50) });
  return s3S(T, { x: 2345, y: gyAt(2330) - 110, z: 3.8 }, [c => owlW(c, o, 2330, gyAt(2330), 1)], { grade: gradeMix('anger', 'anger', 1) });
});
const BOULDER0 = 2710;
function boulderX(T) {
  const L = L3(T); if (L < 16.8) return BOULDER0;
  if (L < 19.5) return BOULDER0 + 80 * sineInOut((L - 16.8) / 2.7) + 2 * Math.sin(L * 30);
  if (L < 20.1) return BOULDER0 + 80;
  const a = L - 20.1; return BOULDER0 + 80 - 0.5 * 300 * a * a;
}
function drawBoulder(c, x, rot) {
  const y = gyAt(x) - 34; c.save(); c.translate(x, y); c.rotate(rot);
  const p = new Path2D(); p.moveTo(-40, 6); p.bezierCurveTo(-42, -26, -14, -40, 6, -38); p.bezierCurveTo(32, -36, 44, -12, 40, 10); p.bezierCurveTo(36, 32, -30, 36, -40, 6); p.closePath();
  c.fillStyle = '#5d6170'; c.fill(p); c.save(); c.clip(p); const r = mulberry(33); for (let i = 0; i < 40; i++) { c.fillStyle = r() > 0.5 ? 'rgba(40,42,52,0.5)' : 'rgba(140,146,165,0.4)'; c.beginPath(); c.arc((r() - 0.5) * 80, (r() - 0.5) * 70, 2 + r() * 5, 0, 7); c.fill(); } c.restore();
  selfShadow(c, p, 7, 'rgba(10,10,20,0.5)'); rimLight(c, p, 2.5, 'rgba(220,228,245,0.5)'); c.restore();
}
shot('s3f', S3 + 16.5, S3 + 21.5, (lt, T) => {
  const L = L3(T); const bx = boulderX(T); const brot = (bx - BOULDER0) / 38;
  let o, ox;
  const flat = L > 20.6;
  if (!flat) {
    ox = bx - 82;
    const push = L > 16.8 && L < 19.5;
    o = push ? walkPose((L - 16.8) * 5, 6, { lean: 0.55, angry: 1, lid: 0.4, yaw: 0.8, gx: 0.8, sq: 0.95 + 0.04 * Math.sin(L * 40), wingN: { x: 52, y: -60, ext: 1 }, wingF: { x: 56, y: -70, ext: 1 }, ruffle: 0.6 })
      : owlStand({ ruffle: 0.6, yaw: trk(L, [[0, 0.8], [19.9, 0.1, 10, 0.8]]), gx: trk(L, [[0, 0.8], [19.75, -0.6, 20, 0.8], [20.3, 1, 26, 0.8]]), gy: 0, happy: L > 19.9 && L < 20.3 ? 1 : 0, eyeS: L > 20.3 ? 1.35 : 1, lean: L < 16.8 ? 0.3 : 0, wingN: L > 19.9 && L < 20.3 ? { x: 40, y: -150, ext: 0.8 } : null });
  } else { ox = BOULDER0 + 18; o = owlStand({ sq: trk(L, [[20.6, 0.22], [20.61, 0.26, 20, 0.6]]), ruffle: 1, lid: 0.6, yaw: 0.05, gx: 0.4 * Math.cos(L * 10), gy: 0.4 * Math.sin(L * 10) }); }
  return s3S(T, { x: 2720, y: 650, z: 1.9, sy: L > 20.6 ? 5 * wobble(L - 20.6, 12, 9) : 0 }, [c => shadowAt(c, ox, 0, flat ? 80 : 40), c => owlW(c, o, ox, gyAt(ox), 1), c => { if (bx > 2450) drawBoulder(c, bx, brot); }], { grade: L > 20.6 ? gradeMix('anger', 'grey', (L - 20.6) / 0.5) : s3grade(T) });
});
shot('s3g', S3 + 21.5, S3 + 25.0, (lt, T) => {
  const L = L3(T); const ox = BOULDER0 + 18;
  const peel = spring(L - 22.0, 9, 0.35);
  const sp = (() => { const a = L - 23.0; if (L < 23.0) return { x: ox - 220 + 220 * clamp((L - 22.4) / 0.6), y: gyAt(ox) - 140 + 125 * clamp((L - 22.4) / 0.6), f: L * 45 }; if (L < 23.8) return { x: ox - 50, y: gyAt(ox) - 15, f: 0 }; const b = L - 23.8; return { x: ox - 50 + 120 * b, y: gyAt(ox) - 15 - 260 * b * (0.6 + b), f: L * 45 }; })();
  const wingOpen = tw(L, [[0, 0], [24.6, 1, 0.4, expoOut]]);
  const o = owlStand({ sq: lerp(0.26, 1, peel), ruffle: 0.8, yaw: trk(L, [[0, 0.1], [23.1, 0.6, 12, 0.7]]), gx: L < 23.9 ? trk(L, [[0, 0], [22.9, -0.8, 20, 0.8]]) : (L < 24.5 ? 0.3 : 0.9), gy: L < 23.9 ? 0.4 : (L < 24.5 ? -0.95 : 0.6),
    tilt: L < 24.05 ? 0 : (L < 24.6 ? trk(L, [[24.05, 0], [24.06, -0.45, 12, 0.7]]) : trk(L, [[24.6, -0.45], [24.61, 0.35, 10, 0.7]])), eyeS: 1 + 0.3 * spring(L - 24.9, 16, 0.45), pupil: 1 + 0.3 * spring(L - 24.9, 16, 0.45), lid: L < 22.5 ? 0.6 : 0,
    wingN: wingOpen > 0.01 ? { x: 70, y: -120, ext: wingOpen } : null });
  return s3S(T, { x: ox - 20, y: gyAt(ox) - 120, z: 2.6 }, [c => shadowAt(c, ox, 0, 44), c => owlW(c, o, ox, gyAt(ox), 1)], { front: c => drawSparrow(c, sp.x, sp.y, sp.f, 1, 1.3) });
});
// flight: takeoff, an arc in front of the moon, landing on the seat behind the turtle
function flightPath(T) {
  const L = L3(T); const ox = BOULDER0 + 18; const b = turtleBike(EV2.land); const seat = bikeToWorld(b, 30, -110);
  const u = clamp((L - 25.5) / (29.2 - 25.5)); const e = sineInOut(u);
  const x = lerp(ox, seat.x, e) - 260 * Math.sin(Math.PI * e) * 0.0 + 120 * Math.sin(Math.PI * 2 * e) * 0.6;
  const y = lerp(gyAt(ox), seat.y, e) - 330 * Math.sin(Math.PI * e);
  return { x, y, u };
}
shot('s3h', S3 + 25.0, S3 + 30.0, (lt, T) => {
  const L = L3(T); const b = turtleBike(T, { gy: -0.8, eyeS: 1.2 });
  const actors = [c => bikeShadow(c, b)];
  if (L < 29.2) {
    actors.push(c => drawBikeOwl(c, b, null));
    if (L < 25.5) { const o = owlStand({ sq: trk(L, [[0, 1], [25.2, 0.78, 14, 0.6]]), ruffle: 0.5, eyeS: 1.2, yaw: 0.7, gx: 0.7, gy: -0.6, wingN: { x: 70, y: -120, ext: 1 }, wingF: { x: 60, y: -125, ext: 1 } }); actors.push(c => owlW(c, o, BOULDER0 + 18, gyAt(BOULDER0 + 18), 1)); }
    else { const f = flightPath(T); const dir = (flightPath(T + 0.02).x - f.x) >= 0 ? 1 : -1; const o = flyPose((L - 25.5) * 2 * Math.PI * 2.6, { ruffle: 0.3, eyeS: 1.15, happy: L > 27 ? 1 : 0 }); actors.push(c => owlW(c, o, f.x, f.y, dir, 0)); }
  } else {
    const rel = trk(L, [[29.2, 0.82], [29.21, 1, 12, 0.45]]);
    const o = { riding: true, sq: rel, lean: 0.1, yaw: 0.6, happy: 1, ruffle: 0.3, twig: true, footN: { x: BK.PEG[0] - 30, y: BK.PEG[1] + 110 }, footF: { x: BK.PEGF[0] - 30, y: BK.PEGF[1] + 110 }, wingN: { x: 52, y: -40, ext: 1 }, wingF: { x: 58, y: -46, ext: 1 } };
    b.extra2 = o;
    const ex = b.extra; b.extra = (c) => { ex(c); c.save(); c.translate(30, -110); drawOwl(c, o, 'all'); c.restore(); };
    actors.push(c => drawBikeOwl(c, b, null));
  }
  return s3S(T, { x: 2530, y: 520, z: 1.25 }, actors, { moon: { x: 1100, y: 250, r: 190 }, back: c => exhaustPuffs(c, T, puttPuffs(T), t => turtleBike(t), { s: 0.8, a: 0.35 }) });
});
shot('s3i', S3 + 30.0, P2.END, (lt, T) => {
  const L = L3(T); const b = turtleBike(T, { lid: 0.2 });
  const seatW = bikeToWorld(b, 30, -110);
  const actors = [c => bikeShadow(c, b)];
  const lifted = T > EV2.liftoff;
  const flapPh = (L - 31.0) * 2 * Math.PI * 3;
  if (!lifted) {
    const o = L < 31.0 ? { riding: true, sq: 1, lean: 0.1, yaw: 0.6, happy: 1, ruffle: 0.3, twig: true, footN: { x: BK.PEG[0] - 30, y: BK.PEG[1] + 110 }, footF: { x: BK.PEGF[0] - 30, y: BK.PEGF[1] + 110 }, wingN: { x: 52, y: -40, ext: 1 }, wingF: { x: 58, y: -46, ext: 1 } }
      : Object.assign(flyPose(flapPh, { lean: 0.1, happy: 1, ruffle: 0.3 }), { footN: { x: BK.PEG[0] - 30, y: BK.PEG[1] + 110 }, footF: { x: BK.PEGF[0] - 30, y: BK.PEGF[1] + 110 } });
    const ex = b.extra; b.extra = (c) => { ex(c); c.save(); c.translate(30, -110); drawOwl(c, o, 'all'); c.restore(); };
    actors.push(c => drawBikeOwl(c, b, null));
  } else {
    actors.push(c => drawBikeOwl(c, b, null));
    const s0 = bikeToWorld(turtleBike(EV2.liftoff), 30, -110); const a = T - EV2.liftoff;
    const hx = s0.x + 20 * Math.min(a, 1), hy = s0.y - 60 * expoOut(clamp(a / 0.8)) + 5 * Math.sin(flapPh);
    const looking = T > EV2.aloneLook;
    const o = flyPose(flapPh * (looking ? 0.6 : 1), { lean: 0.1, happy: T < EV2.liftoff + 0.6 ? 1 : 0, eyeS: T > EV2.liftoff + 0.6 && !looking ? 1.25 : 1, lid: looking ? 0.45 : 0,
      gx: looking ? trk(T, [[0, 0.8], [EV2.aloneLook, -0.7, 18, 0.8], [EV2.aloneLook + 0.4, 0, 10, 0.9]]) : 0.9, yaw: looking ? trk(T, [[0, 0.7], [EV2.aloneLook + 0.15, 0.0, 8, 0.85]]) : 0.7, mouth: bump(T, EV2.hoo, 0.2) * 0.3, puff: bump(T, EV2.hoo, 0.22) * 0.5, footN: { x: 4, y: 6 }, footF: { x: 12, y: 4 } });
    actors.push(c => owlW(c, o, hx, hy, 1));
  }
  return s3S(T, { x: 2700, y: 600, z: 1.6 }, actors, { moon: { x: 1250, y: 200, r: 170 }, back: c => exhaustPuffs(c, T, puttPuffs(T), t => turtleBike(t), { s: 0.8, a: 0.35 }) });
});
// end card: wordmark under the moon, the owl crossing it in flight
shot('end', P2.END, P2.DUR, (lt, T) => ({
  custom: () => {
    const c = ctx; c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    c.drawImage(ART.sky, 0, 0);
    const mr = 230; c.drawImage(ART.moon, 960 - mr * 320 / 300, 380 - mr * 320 / 300, mr * 640 / 300, mr * 640 / 300);
    drawLayer(c, { x: 1500, y: 400, z: 0.9 }, ART.far, LAYER.far);
    const u = clamp((lt - 0.2) / 1.8); const fx = lerp(300, 1650, u), fy = 360 - 80 * Math.sin(Math.PI * u);
    c.setTransform(1.6, 0, 0, 1.6, fx, fy); LX = 1; drawOwl(c, flyPose(lt * 2 * Math.PI * 2.6, { yaw: 0.7, happy: 0 }), 'all');
    c.setTransform(1, 0, 0, 1, 0, 0);
    const pop = spring(lt - 0.5, 10, 0.45); c.save(); c.translate(960, 800); c.scale(pop, pop);
    c.font = '700 190px Fredoka'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillStyle = '#0b1030'; c.fillText('OopsOwl', 8, 8);
    const wOops = c.measureText('Oops').width, wAll = c.measureText('OopsOwl').width;
    c.textAlign = 'left'; c.fillStyle = '#f3ead0'; c.fillText('Oops', -wAll / 2, 0); c.fillStyle = '#f2b01c'; c.fillText('Owl', -wAll / 2 + wOops, 0);
    c.restore();
    grade(c, { mul: GR.cool[0], sat: 0.95 });
  }
}));

// ---------------- dispatch ----------------
window.seek = function (t) { const s = shotAt(t); const S = s.fn(t - s.t0, t); if (S.custom) S.custom(); else compose(t, S); return s.name; };
window.SHOTS = SH.map(s => [s.name, s.t0, s.t1]);
window.EVENTS = EV; window.EVENTS2 = EV2;

// ===================== score + sound effects, rendered offline with Web Audio =====================
const NOTE = n => { const m = { C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }; const r = /^([A-G])(#|b)?(\d)$/.exec(n); let s = m[r[1]] + (r[2] === '#' ? 1 : r[2] === 'b' ? -1 : 0) + (parseInt(r[3]) - 4) * 12; return 440 * Math.pow(2, s / 12); };
async function renderAudio(part = 1, opt = {}) {
  const SR = 48000; const OFF = part === 2 ? 30 : 0; const LEN = part === 1 ? 30 : part === 2 ? FILM_DUR - 30 : part === 4 ? EP2.DUR : part === 5 ? EP3.DUR : part === 6 ? COMP.DUR : part === 'custom' ? window.SCORE_LEN : INTRO_LEN; const N = Math.round(SR * LEN); const ac = new OfflineAudioContext(2, N, SR);
  const E = EVENTS;
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 3; comp.attack.value = 0.004; comp.release.value = 0.25; comp.knee.value = 8;
  const master = ac.createGain(); master.gain.value = 0.9; master.connect(comp); comp.connect(ac.destination);
  // reverb: generated impulse response (open night air)
  const ir = ac.createBuffer(2, SR * 2.6, SR); { const r = mulberry(1); for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < d.length; i++) { const t = i / SR; d[i] = (r() * 2 - 1) * Math.exp(-t * 2.6) * (t < 0.012 ? t / 0.012 : 1); } } }
  const rev = ac.createConvolver(); rev.buffer = ir; const revG = ac.createGain(); revG.gain.value = 0.32; rev.connect(revG); revG.connect(master);
  const bus = (g, send) => { const b = ac.createGain(); b.gain.value = g; b.connect(master); if (send) { const s = ac.createGain(); s.gain.value = send; b.connect(s); s.connect(rev); } return b; };
  const MUS = bus(0.5, 0.55), SFX = bus(0.8, 0.25), AMB = bus(0.35, 0.4), ENG = bus(0.3, 0.12);
  // music bus automation: cuts to silence on the apex hang and at the splash
  const mg = MUS.gain; mg.setValueAtTime(0.5, 0);
  if (part === 1) {
  mg.setValueAtTime(0.5, E.splash2 - 0.01); mg.linearRampToValueAtTime(0.0, E.splash2 + 0.03); mg.setValueAtTime(0.0, E.splash2 + 0.3); mg.linearRampToValueAtTime(0.5, E.splash2 + 0.35);
  mg.setValueAtTime(0.5, T_S8B - 0.06); mg.linearRampToValueAtTime(0.0, T_S8B + 0.02); mg.setValueAtTime(0.0, T_S8B + 0.3); mg.linearRampToValueAtTime(0.5, T_S8B + 0.32);
  const ag = AMB.gain; ag.setValueAtTime(0.35, 0); ag.setValueAtTime(0.35, T_S8B - 0.05); ag.linearRampToValueAtTime(0.0, T_S8B + 0.05); ag.setValueAtTime(0, T_S9 - 0.3); ag.linearRampToValueAtTime(0.35, T_S9 + 0.5);
  }

  const nb = ac.createBuffer(1, SR * 3, SR); { const d = nb.getChannelData(0); const r = mulberry(2); for (let i = 0; i < d.length; i++) d[i] = r() * 2 - 1; }
  const pan = (dest, p) => { const s = ac.createStereoPanner(); s.pan.value = p || 0; s.connect(dest); return s; };
  function env(g, t, a, d, peak, curve = 'exp') { g.gain.setValueAtTime(0.0001, Math.max(0, t)); g.gain.linearRampToValueAtTime(peak, t + a); if (curve === 'exp') g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); else g.gain.linearRampToValueAtTime(0.0001, t + a + d); }
  function tone({ type = 'sine', f, t, dur, v = 0.3, a = 0.005, dest = MUS, p = 0, glide, glideT, det = 0, lp, q = 1, vib, vibD = 0, curve = 'exp' }) {
    t -= OFF; if (t < 0 || t > LEN) return; const o = ac.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); o.detune.value = det;
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + (glideT || dur));
    if (vib) { const l = ac.createOscillator(); l.frequency.value = vib; const lg = ac.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(vibD, t + Math.min(0.3, dur)); l.connect(lg); lg.connect(o.detune); l.start(t); l.stop(t + dur + 0.2); }
    const g = ac.createGain(); env(g, t, a, dur, v, curve); let n = o;
    if (lp) { const fl = ac.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = lp; fl.Q.value = q; o.connect(fl); n = fl; }
    n.connect(g); g.connect(pan(dest, p)); o.start(t); o.stop(t + a + dur + 0.05); return { o, g };
  }
  function noise({ t, dur, v = 0.3, a = 0.002, type = 'bandpass', f = 1000, f2, q = 1, dest = SFX, p = 0, curve = 'exp', rate = 1 }) {
    t -= OFF; if (t < 0 || t > LEN) return; const s = ac.createBufferSource(); s.buffer = nb; s.playbackRate.value = rate; const fl = ac.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); fl.Q.value = q;
    if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur); const g = ac.createGain(); env(g, t, a, dur, v, curve);
    s.connect(fl); fl.connect(g); g.connect(pan(dest, p)); s.start(t, (t * 7.31) % 2); s.stop(t + a + dur + 0.05);
  }
  // ---- instruments ----
  const marimba = (n, t, v = 0.22, p = 0) => { const f = typeof n === 'string' ? NOTE(n) : n; tone({ f, t, dur: 0.7, v, p }); tone({ f: f * 4, t, dur: 0.12, v: v * 0.3, p }); tone({ f: f * 10, t, dur: 0.02, v: v * 0.15, p }); };
  const bass = (n, t, dur = 0.4, v = 0.35, det = 0) => { const f = typeof n === 'string' ? NOTE(n) : n; tone({ type: 'triangle', f, t, dur, v, lp: 700, det }); tone({ f: f / 2, t, dur: dur * 0.8, v: v * 0.5, det }); };
  const clar = (n, t, dur, v = 0.16, p = 0.1) => { const f = NOTE(n); tone({ type: 'square', f, t, dur, v, a: 0.05, lp: 1500, q: 0.7, vib: 5.2, vibD: 9, curve: 'lin', p }); tone({ type: 'sine', f: f * 2, t, dur, v: v * 0.25, a: 0.06, curve: 'lin', p }); };
  const mbox = (n, t, v = 0.15, p = 0) => { const f = NOTE(n); tone({ f, t, dur: 1.4, v, p }); tone({ f: f * 2.76, t, dur: 0.35, v: v * 0.35, p }); tone({ f: f * 5.4, t, dur: 0.08, v: v * 0.2, p }); };
  const glock = (n, t, v = 0.16, p = 0, d = 2.4) => { const f = NOTE(n); tone({ f, t, dur: d, v, p }); tone({ f: f * 2.76, t, dur: d * 0.3, v: v * 0.3, p }); tone({ f: f * 5.4, t, dur: d * 0.1, v: v * 0.15, p }); };
  const pad = (ns, t, dur, v = 0.06) => { t -= OFF; if (t < 0) return; for (const n of ns) for (const d of [-6, 6]) { const f = NOTE(n); const o = ac.createOscillator(); o.type = 'triangle'; o.frequency.value = f; o.detune.value = d; const fl = ac.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 1100; const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.6); g.gain.setValueAtTime(v, t + dur - 0.8); g.gain.linearRampToValueAtTime(0.0001, t + dur); o.connect(fl); fl.connect(g); g.connect(MUS); o.start(t); o.stop(t + dur + 0.05); } };
  const wah = (n, t, dur, v = 0.2, bend) => { t -= OFF; if (t < 0) return; const f = NOTE(n); const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); if (bend) o.frequency.linearRampToValueAtTime(f * bend, t + dur); const vl = ac.createOscillator(); vl.frequency.value = 5; const vg = ac.createGain(); vg.gain.setValueAtTime(0, t); vg.gain.linearRampToValueAtTime(dur > 0.3 ? 22 : 0, t + dur); vl.connect(vg); vg.connect(o.detune); vl.start(t); vl.stop(t + dur + 0.1);
    const fl = ac.createBiquadFilter(); fl.type = 'lowpass'; fl.Q.value = 5; fl.frequency.setValueAtTime(350, t); fl.frequency.linearRampToValueAtTime(1300, t + Math.min(0.09, dur * 0.4)); fl.frequency.linearRampToValueAtTime(420, t + dur);
    const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + 0.03); g.gain.setValueAtTime(v, t + dur - 0.05); g.gain.linearRampToValueAtTime(0.0001, t + dur); o.connect(fl); fl.connect(g); g.connect(MUS); o.start(t); o.stop(t + dur + 0.05); };
  const whistle = (f0, f1, t, dur, v = 0.12, p = 0) => tone({ f: f0, glide: f1, t, dur, v, a: 0.03, vib: 7, vibD: 30, curve: 'lin', dest: SFX, p });
  const kick = (t, v = 0.5) => { tone({ f: 130, glide: 42, glideT: 0.12, t, dur: 0.28, v, dest: MUS }); noise({ t, dur: 0.02, v: v * 0.3, f: 3000, dest: MUS }); };
  const snare = (t, v = 0.25) => { noise({ t, dur: 0.16, v, type: 'highpass', f: 1600, dest: MUS }); tone({ f: 190, t, dur: 0.08, v: v * 0.6, dest: MUS }); };
  const hat = (t, v = 0.08) => noise({ t, dur: 0.035, v, type: 'highpass', f: 7500, dest: MUS });
  const cym = (t, v = 0.2) => noise({ t, dur: 1.6, v, type: 'highpass', f: 5200, dest: MUS });
  const timp = (t, n = 'D2', v = 0.45) => { const f = NOTE(n); tone({ f: f * 1.06, glide: f, glideT: 0.08, t, dur: 0.9, v, dest: MUS }); noise({ t, dur: 0.2, v: v * 0.4, type: 'lowpass', f: 300, dest: MUS }); };
  const wood = (t, f = 1100, v = 0.15, p = 0) => { tone({ f, t, dur: 0.05, v, dest: SFX, p }); noise({ t, dur: 0.02, v: v * 0.5, f: f * 2, q: 4, p }); };
  const thud = (t, v = 0.6, p = 0) => { tone({ f: 95, glide: 38, glideT: 0.18, t, dur: 0.35, v, dest: SFX, p }); noise({ t, dur: 0.12, v: v * 0.5, type: 'lowpass', f: 500, p }); };
  const clang = (t, v = 0.25, p = 0) => { for (const [f, d] of [[312, 0.7], [847, 0.4], [1490, 0.25], [2210, 0.15]]) tone({ f, t, dur: d, v: v / 2, dest: SFX, p }); noise({ t, dur: 0.05, v: v * 0.6, type: 'highpass', f: 2000, p }); };
  const hoot = (t, f = 330, dur = 0.26, v = 0.3, p = -0.2) => { tone({ f: f * 1.04, glide: f * 0.9, t, dur, v, a: 0.05, dest: SFX, p, curve: 'lin', lp: 900 }); tone({ f: f * 2, glide: f * 1.8, t, dur, v: v * 0.12, a: 0.05, dest: SFX, p, curve: 'lin' }); noise({ t, dur, v: v * 0.12, f: f * 2, q: 3, a: 0.04, p, curve: 'lin' }); };
  const splashS = (t, v = 0.8, p = 0) => { noise({ t, dur: 0.6, v, type: 'lowpass', f: 2600, f2: 500, p }); noise({ t, dur: 1.2, v: v * 0.5, f: 1800, f2: 700, q: 0.8, p }); tone({ f: 140, glide: 50, glideT: 0.2, t, dur: 0.3, v: v * 0.5, dest: SFX, p }); const r = mulberry(Math.floor(t * 100)); for (let i = 0; i < 22; i++) { const tt = t + 0.25 + r() * 1.4; const f = 900 + r() * 1600; tone({ f, glide: f * 1.6, glideT: 0.04, t: tt, dur: 0.05, v: 0.05 + r() * 0.06, dest: SFX, p: p + (r() - .5) * 0.6 }); } };
  const plink = (t, v = 0.08, p = 0) => tone({ f: 1400 + (t * 997 % 700), glide: 2600, glideT: 0.03, t, dur: 0.06, v, dest: SFX, p });
  const creak = (t, dur, f = 520, v = 0.12, p = 0) => { t -= OFF; if (t < 0) return; const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * 0.8, t + dur); const am = ac.createOscillator(); am.type = 'square'; am.frequency.setValueAtTime(28, t); am.frequency.linearRampToValueAtTime(14, t + dur); const ag2 = ac.createGain(); ag2.gain.value = 0.5; am.connect(ag2); const g = ac.createGain(); g.gain.value = 0; ag2.connect(g.gain); const g2 = ac.createGain(); env(g2, t, 0.02, dur, v, 'lin'); const fl = ac.createBiquadFilter(); fl.type = 'bandpass'; fl.frequency.value = f * 2; fl.Q.value = 2; o.connect(fl); fl.connect(g); g.connect(g2); g2.connect(pan(SFX, p)); o.start(t); am.start(t); o.stop(t + dur + 0.1); am.stop(t + dur + 0.1); };
  const rustle = (t, dur, v = 0.25, p = 0) => { const r = mulberry(5); for (let i = 0; i < dur * 40; i++) { const tt = t + Math.pow(r(), 1.6) * dur; noise({ t: tt, dur: 0.04 + r() * 0.06, v: v * (1 - (tt - t) / dur) * (0.4 + r()), f: 2500 + r() * 3000, q: 1.5, p: p + (r() - .5) * 0.8 }); } };

  // ---------------- engine: firing pulses through exhaust resonances ----------------
  const engineSynth = (keys, coughs, panFn) => {
    let ki = 1; const at = (t, k) => { if (ki > 1 && t < keys[ki - 1][0]) ki = 1; while (ki < keys.length && t >= keys[ki][0]) ki++; if (ki >= keys.length) return 0; const a = keys[ki - 1], b = keys[ki]; const u = (t - a[0]) / (b[0] - a[0] || 1); return a[k] + (b[k] - a[k]) * u; };
    const misfire = t => coughs.some(c => t > c - 0.16 && t < c);
    const buf = ac.createBuffer(1, N, SR); const d = buf.getChannelData(0);
    const res = [[95, 0.9965], [230, 0.994], [610, 0.985], [1500, 0.96]].map(([f, r]) => ({ c1: 2 * r * Math.cos(2 * Math.PI * f / SR), c2: -r * r, y1: 0, y2: 0 }));
    let ph = 0; const rn = mulberry(77); let noiseLP = 0; let lastCough = -1;
    for (let i = 0; i < N; i++) {
      const t = i / SR + OFF; const rpm = at(t, 1), lev = at(t, 2);
      let x = 0;
      if (lev > 0.001 && rpm > 100) {
        ph += rpm / 120 / SR * (1 + (rn() - 0.5) * 0.02);
        if (ph >= 1) { ph -= 1; if (!misfire(t)) x = lev * (0.8 + rn() * 0.4); }
        for (const c of coughs) if (lastCough < c && t >= c) { x = 3.2; lastCough = c; }
        noiseLP += ((rn() * 2 - 1) - noiseLP) * 0.25; x += noiseLP * lev * 0.05 * (rpm / 6000);
      }
      let y = 0;
      for (let k = 0; k < res.length; k++) { const R = res[k]; const v = R.c1 * R.y1 + R.c2 * R.y2 + x * (k === 0 ? 1 : k === 1 ? 0.6 : k === 2 ? 0.35 : 0.15 * Math.min(2, rpm / 5000)); R.y2 = R.y1; R.y1 = v; y += v; }
      d[i] = Math.tanh(y * 0.05) * 0.9;
    }
    const s = ac.createBufferSource(); s.buffer = buf; const p = ac.createStereoPanner();
    if (panFn) panFn(p.pan); s.connect(p); p.connect(ENG); s.start(0);
  };
  if (part === 1) {
    const keys1 = [ // [time, rpm, level]
      [0, 0, 0], [E.rev1 - 0.02, 1400, 0], [E.rev1, 1600, 0.6], [E.rev1 + 0.14, 7600, 1], [E.rev1 + 0.55, 2400, 0.55], [T_S3, 2300, 0.5], [E.start1, 2600, 0.6], [E.start1 + 0.8, 4600, 0.75], [E.coughs[0], 3600, 0.6], [E.teeter - 0.05, 1500, 0.4], [E.teeter, 900, 0.0],
      [T_S5, 900, 0.0], [T_S5 + 0.02, 3000, 0.6], [T_S5 + 0.12, 8200, 1], [E.start2, 5200, 0.85], [E.launch2, 9200, 1], [E.launch2 + 0.15, 10500, 0.9], [E.splash2, 10500, 0.85], [E.splash2 + 0.03, 3000, 0],
      [E.rev3 - 0.02, 2000, 0], [E.rev3, 3000, 0.8], [E.rev3 + 0.12, 11000, 1.2], [T_S8A - 0.05, 8000, 1], [T_S8A, 9000, 1.2], [E.launch3, 11500, 1.2], [E.launch3 + 0.2, 12500, 1], [T_S8B - 0.08, 12500, 0.9], [T_S8B + 0.05, 9000, 0],
      [T_S11A, 1500, 0], [T_S11A + 0.01, 1600, 0.45], [E.rollStop, 1300, 0.4], [E.engineOff - 0.1, 1100, 0.35], [E.engineOff + 0.05, 600, 0], [DUR, 0, 0]
    ];
    engineSynth(keys1, E.coughs, pp => {
    pp.setValueAtTime(0.1, 0); pp.setValueAtTime(-0.55, T_S3); pp.linearRampToValueAtTime(0.35, E.teeter); pp.setValueAtTime(-0.5, T_S5); pp.linearRampToValueAtTime(0.6, E.splash2);
    pp.setValueAtTime(0.05, T_S7); pp.setValueAtTime(-0.6, T_S8A); pp.linearRampToValueAtTime(0.55, T_S8B); pp.setValueAtTime(0.5, T_S11A); pp.linearRampToValueAtTime(0.25, E.rollStop);
    });
  }
  // ---------------- ambience: crickets + air ----------------
  {
    const buf = ac.createBuffer(2, N, SR);
    for (let ch = 0; ch < 2; ch++) { const d = buf.getChannelData(ch); const r = mulberry(30 + ch); let t = r() * 0.5; const f = ch ? 4650 : 4320; while (t < ((typeof part === 'number' && part < 4) ? DUR : LEN)) { for (let p = 0; p < 3; p++) { const s0 = Math.floor((t + p * 0.032) * SR); for (let j = 0; j < SR * 0.018; j++) { const tt = j / SR; if (s0 + j < N) d[s0 + j] += Math.sin(2 * Math.PI * f * tt) * Math.sin(Math.PI * tt / 0.018) * 0.22; } } t += 0.58 + r() * 0.22; } }
    const s = ac.createBufferSource(); s.buffer = buf; s.connect(AMB); s.start(0);
    const w = ac.createBufferSource(); w.buffer = nb; w.loop = true; const wf = ac.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 380; wf.Q.value = 0.6; const wg = ac.createGain();
    wg.gain.setValueAtTime(0.05, 0); if (part === 1) { wg.gain.setValueAtTime(0.05, T_S8B - 0.05); wg.gain.linearRampToValueAtTime(0.13, T_S8B + 0.1); wg.gain.setValueAtTime(0.13, T_S8C - 0.1); wg.gain.linearRampToValueAtTime(0.05, T_S8C + 0.3); }
    w.connect(wf); wf.connect(wg); wg.connect(master); w.start(0);
  }
  if (part === 1) {
  // ================= SCORE + SFX by shot =================
  // S1: wistful two hoots, the moon motif rising and left unresolved
  hoot(E.hoot[0], 345, 0.2); hoot(E.hoot[1], 310, 0.34);
  pad(['D3', 'A3', 'E4', 'F#4'], 0.1, 2.9, 0.045);
  ['D3', 'A3', 'F#4', 'A4'].forEach((n, i) => marimba(n, 0.15 + i * 0.22, 0.16));
  clar('A4', 0.95, 0.32); clar('D5', 1.28, 0.32); clar('E5', 1.61, 0.32); clar('F#5', 1.95, 0.85);
  // S2: snare roll builds, engine bark
  for (let i = 0; i < 14; i++) snare(T_S2 + 0.1 + i * 0.035, 0.03 + i * 0.006);
  timp(E.rev1, 'D2', 0.4); cym(E.rev1, 0.08);
  // S3: oom-pah that slows and sags as the engine coughs; silence on the teeter; trombone wah
  { let t = E.start1; let beat = 0.23; let i = 0; while (t < E.teeter - 0.1) { const sag = clamp((t - E.coughs[0]) / (E.teeter - E.coughs[0])); const det = -sag * 160; if (i % 2 === 0) bass(['D2', 'A1', 'D2', 'A1'][(i / 2) % 4], t, 0.25, 0.34, det); else { tone({ type: 'triangle', f: NOTE('F#3'), t, dur: 0.12, v: 0.08, det }); tone({ type: 'triangle', f: NOTE('A3'), t, dur: 0.12, v: 0.08, det }); } if (i % 4 === 1) marimba(['A4', 'B4', 'A4', 'F#4', 'E4', 'D4'][(i >> 2) % 6], t, 0.14 * (1 - sag * 0.5)); t += beat * (1 + sag * 1.3); i++; } }
  for (const c of E.coughs) { noise({ t: c, dur: 0.12, v: 0.35, type: 'lowpass', f: 900 }); }
  creak(E.teeter + 0.08, 0.32, 380, 0.1, 0.3);
  wah('A3', E.tip, 0.17); wah('G#3', E.tip + 0.19, 0.17); wah('G3', E.tip + 0.38, 0.17); wah('F#3', E.tip + 0.57, 0.6, 0.2, 0.97);
  thud(E.thud1, 0.6, 0.3); clang(E.thud1 + 0.02, 0.15, 0.3); noise({ t: E.thud1, dur: 0.3, v: 0.2, f: 3000, q: 0.7, p: 0.3 });
  // S4: pop, head rattle, determined snare
  tone({ f: 280, glide: 950, glideT: 0.08, t: E.pop, dur: 0.12, v: 0.2, dest: SFX });
  for (let i = 0; i < 9; i++) wood(E.shake + i * 0.036, 700 + (i % 2) * 260, 0.07);
  rustle(E.shake, 0.3, 0.12);
  snare(E.glare, 0.25); snare(E.glare + 0.1, 0.32); kick(E.glare + 0.1, 0.4);
  for (const n of ['D3', 'A3', 'D4']) tone({ type: 'sawtooth', f: NOTE(n), t: E.glare + 0.1, dur: 0.22, v: 0.06, lp: 1200, curve: 'lin' });
  // S5: driving faster tune, slide whistle up, SPLASH, then silence
  { const bt = 60 / 150; for (let t = T_S5 + 0.05, i = 0; t < E.splash2 - 0.02; t += bt / 2, i++) { if (i % 2 === 0) { kick(t, 0.35); bass(['D2', 'D2', 'G2', 'A2'][(i >> 2) % 4], t, 0.18, 0.3); } else { hat(t); } if (i % 4 === 2) snare(t, 0.18); if (i % 2 === 1) marimba(['D5', 'F#5', 'A5', 'F#5', 'E5', 'G5', 'A5', 'B5'][(i >> 1) % 8], t, 0.12); } }
  whistle(500, 1600, E.launch2, E.splash2 - E.launch2, 0.12, 0.4);
  splashS(E.splash2, 0.9, 0.5); noise({ t: E.splash2 + 0.3, dur: 0.6, v: 0.15, type: 'lowpass', f: 400, p: 0.5 });
  // S6: bloop up, drips, cheek squeak, ptoo, sad trombone
  tone({ f: 180, glide: 520, glideT: 0.1, t: E.surface, dur: 0.16, v: 0.25, dest: SFX }); noise({ t: E.surface, dur: 0.4, v: 0.25, f: 900, f2: 400 });
  { const r = mulberry(6); for (let i = 0; i < 9; i++) plink(T_S6 + 0.3 + r() * 1.2, 0.06, (r() - .5) * 0.4); }
  tone({ type: 'triangle', f: 600, glide: 780, glideT: 0.2, t: E.puffCheeks, dur: 0.2, v: 0.06, dest: SFX, vib: 18, vibD: 60 });
  noise({ t: E.spit, dur: 0.16, v: 0.35, f: 1800, f2: 700, q: 1.2 }); tone({ f: 420, glide: 180, glideT: 0.12, t: E.spit, dur: 0.14, v: 0.15, dest: SFX });
  splashS(E.spit + 0.33, 0.15, 0.35);
  wah('F3', E.slump, 0.7, 0.2, 0.89);
  // S7: low drums, glare, ROAR
  timp(E.glare3, 'A1', 0.5); timp(E.crouch3, 'A1', 0.45); for (let i = 0; i < 8; i++) snare(E.crouch3 + 0.04 + i * 0.03, 0.04 + i * 0.012);
  timp(E.rev3, 'D2', 0.7); cym(E.rev3, 0.18);
  for (let i = 0; i < 6; i++) noise({ t: E.rev3 + 0.15 + i * 0.07, dur: 0.03, v: 0.25, type: 'highpass', f: 1200 });
  // S8a: full band, the moon theme climbing, slide whistle on launch
  { const bt = 60 / 168; let i = 0; for (let t = T_S8A; t < T_S8B - 0.08; t += bt / 2, i++) { if (i % 2 === 0) { kick(t, 0.45); bass(['D2', 'D2', 'A1', 'A1'][(i >> 2) % 4], t, 0.16, 0.34); } else hat(t, 0.1); if (i % 4 === 2) snare(t, 0.26); } }
  clar('A4', T_S8A + 0.12, 0.22, 0.2); clar('D5', T_S8A + 0.38, 0.22, 0.2); clar('E5', T_S8A + 0.64, 0.22, 0.2); clar('F#5', T_S8A + 0.9, 0.3, 0.2); clar('A5', T_S8A + 1.22, 0.45, 0.2);
  whistle(450, 1900, E.launch3, T_S8B - E.launch3 + 0.05, 0.13, 0.4);
  // S8b: silence, a single high note for the moon, then a gulp
  glock('A6', E.apex - 0.25, 0.14, 0, 3.0); glock('D6', E.apex - 0.25, 0.05, 0, 2.0);
  tone({ f: 420, glide: 230, glideT: 0.07, t: E.gulp, dur: 0.09, v: 0.22, dest: SFX }); wood(E.gulp + 0.02, 520, 0.05);
  whistle(1700, 380, E.drop, T_S8C - E.drop + S8C_IMP, 0.14, 0.2);
  // S8c: crash into the oak
  noise({ t: E.crash, dur: 0.08, v: 0.6, type: 'highpass', f: 1500 }); for (let i = 0; i < 4; i++) { noise({ t: E.crash + 0.03 + i * 0.05, dur: 0.03, v: 0.4, type: 'highpass', f: 2500, p: 0.1 }); }
  rustle(E.crash, 1.4, 0.7, 0.15); cym(E.crash, 0.4); thud(E.crash, 1.0, 0.1); clang(E.crash + 0.03, 0.35, 0.1); noise({ t: E.crash, dur: 0.5, v: 0.5, type: 'lowpass', f: 1500, f2: 300 });
  thud(E.bikeLand, 1.0, -0.1); clang(E.bikeLand, 0.45, -0.1); clang(E.bikeLand + 0.12, 0.12, -0.1);
  thud(E.owlLand, 0.3, 0.25); noise({ t: E.owlLand, dur: 0.25, v: 0.2, f: 700, p: 0.25 });
  tone({ f: 700, glide: 300, glideT: 0.4, t: E.owlLand + 0.15, dur: 0.45, v: 0.05, dest: SFX, vib: 9, vibD: 50 });
  // S9: wheel ticking, music box in minor
  { let k = 1; for (let t = E.bikeLand; t < T_S10 + 0.5; t += 0.001) { const ang = 8 / 0.6 * (1 - Math.exp(-0.6 * (t - E.crash))); if (ang > k * 0.55) { wood(t, 2400, 0.025, -0.3); k++; } } }
  [['A4', 0], ['D5', 0.45], ['E5', 0.9], ['F5', 1.35], ['E5', 2.1], ['D5', 2.55], ['C#5', 3.0]].forEach(([n, d]) => mbox(n, T_S9 + 0.25 + d, 0.13));
  pad(['D3', 'F3', 'A3'], T_S9 + 0.2, 2.9, 0.03);
  // S10: the turn — a soft ting, the chord turns major and swells
  glock('D6', E.featherLand - 1.1, 0.08); pad(['D3', 'A3', 'D4', 'F#4', 'A4'], T_S10 + 0.8, 3.4, 0.05);
  // S10b: plip, shimmer through the reflection
  tone({ f: 1900, glide: 2800, glideT: 0.03, t: E.featherLand, dur: 0.05, v: 0.09, dest: SFX });
  ['D6', 'F#6', 'A6', 'D7'].forEach((n, i) => glock(n, E.featherLand + 0.08 + i * 0.12, 0.05, (i - 1.5) * 0.3, 1.6));
  // S11a: idle putts out, kickstand clunk, hop
  creak(E.rollStop, 0.12, 900, 0.04, 0.2); clang(E.kick, 0.22, 0.25); thud(E.kick, 0.15, 0.25);
  noise({ t: E.hop, dur: 0.18, v: 0.15, f: 600, f2: 1400, p: 0.1 }); noise({ t: E.hop + 0.12, dur: 0.15, v: 0.12, f: 700, f2: 1500, p: 0 });
  thud(E.hopLand, 0.18, -0.1);
  // S11b: the moon theme resolves on the touch
  pad(['D3', 'A3', 'D4', 'F#4'], T_S11B, 2.6, 0.05); bass('D2', T_S11B + 0.1, 1.2, 0.25);
  ['D4', 'F#4', 'A4', 'D5'].forEach((n, i) => marimba(n, T_S11B + 0.1 + i * 0.16, 0.1));
  clar('A4', E.touch - 0.98, 0.28, 0.13); clar('D5', E.touch - 0.68, 0.28, 0.13); clar('E5', E.touch - 0.38, 0.32, 0.13); clar('D5', E.touch, 1.1, 0.13);
  ['D6', 'F#6', 'A6'].forEach((n, i) => glock(n, E.touch + i * 0.015, 0.07, (i - 1) * 0.4, 2.2)); tone({ f: 1500, glide: 2400, glideT: 0.03, t: E.touch, dur: 0.06, v: 0.07, dest: SFX });
  bass('A1', E.touch + 0.5, 0.6, 0.15); bass('D2', E.touch + 0.9, 1.2, 0.2);
  noise({ t: E.sigh, dur: 0.6, v: 0.08, type: 'lowpass', f: 1200, f2: 400, a: 0.12, curve: 'lin' });
  // S12: the gag
  creak(E.creak, 0.22, 640, 0.1, 0.35);
  { const tS = E.sploosh; for (let t = E.roll, k = 0; t < tS; k++) { wood(t, 3000, 0.03, 0.3 - (t - E.roll)); const v = Math.max(0.2, ROLL_A * (t - E.roll)); t += Math.min(0.12, 18 / v); } }
  splashS(E.sploosh, 0.85, -0.1); tone({ f: 110, glide: 60, glideT: 0.3, t: E.sploosh + 0.05, dur: 0.4, v: 0.3, dest: SFX });
  for (let i = 0; i < 5; i++) tone({ f: 200 + i * 60, glide: 400 + i * 80, glideT: 0.05, t: E.sploosh + 0.35 + i * 0.09, dur: 0.06, v: 0.06, dest: SFX });
  noise({ t: E.drench, dur: 0.35, v: 0.4, f: 1200, f2: 500, q: 0.8 });
  { const r = mulberry(8); for (let i = 0; i < 6; i++) plink(E.drench + 0.3 + r() * 0.9, 0.04, (r() - .5) * 0.3); }
  wood(E.eyeSlide, 1800, 0.04);
  for (let i = 0; i < 10; i++) wood(E.headTurn + i * 0.034, 900 - i * 12, 0.05);
  creak(E.headTurn, 0.34, 300, 0.04);
  hoot(E.hoo, 300, 0.16, 0.24, 0);

  } else if (part === 'custom') { window.SCORE({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, AMB, mg, OFF, ac, SR, LEN }); } else if (part === 6) { ep4Score({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, AMB, mg, OFF, ac }); } else if (part === 5) { ep3Score({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, AMB, mg, OFF, ac }); } else if (part === 4) { ep2Score({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, AMB, mg, OFF, ac }); } else if (part === 3) { introScore({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, mg, OFF }); } else { part2Score({ tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, engineSynth, MUS, SFX, mg, OFF }); }
  const out = await ac.startRendering();
  if (opt.raw) return out;
  // normalise and encode 16-bit WAV
  const L = out.getChannelData(0), R = out.getChannelData(1); let pk = 0; for (let i = 0; i < N; i++) pk = Math.max(pk, Math.abs(L[i]), Math.abs(R[i]));
  const g = 0.89 / (pk || 1); const bytes = new ArrayBuffer(44 + N * 4); const dv = new DataView(bytes);
  const wstr = (o, s) => { for (let i = 0; i < s.length; i++) dv.setUint8(o + i, s.charCodeAt(i)); };
  wstr(0, 'RIFF'); dv.setUint32(4, 36 + N * 4, true); wstr(8, 'WAVE'); wstr(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 2, true); dv.setUint32(24, SR, true); dv.setUint32(28, SR * 4, true); dv.setUint16(32, 4, true); dv.setUint16(34, 16, true); wstr(36, 'data'); dv.setUint32(40, N * 4, true);
  for (let i = 0; i < N; i++) { dv.setInt16(44 + i * 4, clamp(L[i] * g, -1, 1) * 32767, true); dv.setInt16(46 + i * 4, clamp(R[i] * g, -1, 1) * 32767, true); }
  const u8 = new Uint8Array(bytes); let s = ''; const CH = 0x8000; for (let i = 0; i < u8.length; i += CH) s += String.fromCharCode.apply(null, u8.subarray(i, i + CH));
  return { peak: pk, b64: btoa(s) };
}
window.renderAudio = renderAudio;

// ===================== OopsOwl channel intro (5 s): half-body owl rises in front of the moon, "OOPS OWL" ring pops in =====================
const INTRO_LEN = 5.2;
const INTRO = { ring: 'OOPS OWL • OOPS OWL • ', r0: 1.55, dt: 0.06, hoot: [3.2, 3.52], eyesOpen: 1.35, rise: 0.35, resolve: 3.0, happy: 4.0, hit: 4.6 };
function introOwl(t) {
  return Object.assign({}, SIT_FEET, {
    sq: trk(t, [[0, 1], [INTRO.rise, 1.1, 10, 0.5], [INTRO.rise + 0.55, 0.93, 9, 0.5], [INTRO.rise + 0.85, 1, 8, 0.6], [INTRO.hit, 1.06, 14, 0.4], [INTRO.hit + 0.15, 1, 10, 0.6]]),
    lean: 0, yaw: trk(t, [[0, 0.35], [INTRO.eyesOpen + 0.05, 0.0, 9, 0.7]]), tilt: trk(t, [[0, 0.1], [INTRO.eyesOpen + 0.05, 0, 9, 0.7], [INTRO.happy, 0.14, 8, 0.6], [INTRO.hit, 0, 10, 0.6]]),
    lid: t < INTRO.eyesOpen ? 1 : trk(t, [[INTRO.eyesOpen, 1], [INTRO.eyesOpen + 0.001, 0, 30, 0.9]]), eyeS: trk(t, [[0, 1], [INTRO.eyesOpen, 1.22, 18, 0.35], [INTRO.eyesOpen + 0.3, 1.06, 10, 0.6]]),
    gx: trk(t, [[0, 0], [1.8, 0.5, 14, 0.8], [2.8, -0.4, 10, 0.8], [3.15, 0, 12, 0.8]]), gy: trk(t, [[0, 0], [1.8, -0.45, 14, 0.8], [3.15, 0, 12, 0.8]]),
    happy: t > INTRO.happy && t < INTRO.hit ? 1 : 0, tuft: ftrk(t, [[0, 0], [INTRO.eyesOpen, 0.9], [INTRO.hit, -0.6]], 16, 5),
    puff: bump(t, INTRO.hoot[0], 0.22) + bump(t, INTRO.hoot[1], 0.3), mouth: 0.3 * (bump(t, INTRO.hoot[0], 0.22) + bump(t, INTRO.hoot[1], 0.3)), twig: true,
    wingN: null, wingF: null
  });
}
window.seekIntro = function (t) {
  const c = ctx; c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
  c.drawImage(ART.sky, 0, 0);
  // moon swells up behind
  const DY = (H - 1080) / 2, CX = W / 2;
  const ms = spring(t - 0.05, 6, 0.6); const mr = 330 * (0.55 + 0.45 * ms), my = 520 - 60 * ms + DY;
  c.drawImage(ART.moon, CX - mr * 320 / 300, my - mr * 320 / 300, mr * 640 / 300, mr * 640 / 300);

  // half-body owl rising from below the frame
  const S = 6.6; const o = introOwl(t); const hp = owlHeadPos(o);
  const rise = 620 * (1 - spring(t - INTRO.rise, 8, 0.55));
  const hipY = 490 - S * hp.y + rise + DY;
  c.setTransform(S, 0, 0, S, CX - S * hp.x, hipY); LX = 1; drawOwl(c, o, 'all');
  // the ring of letters pops in, one per note, then turns slowly
  c.setTransform(1, 0, 0, 1, 0, 0);
  const N = INTRO.ring.length, R = 395, cx = CX, cy = 490 + rise * 0.15 + DY;
  const rot = 0.22 * Math.max(0, t - INTRO.r0) + 0.06 * Math.max(0, wobble(t - INTRO.hit, 3, 5));
  c.font = '700 104px Fredoka'; c.textAlign = 'center'; c.textBaseline = 'middle';
  for (let i = 0; i < N; i++) {
    const ch = INTRO.ring[i]; if (ch === ' ') continue;
    const s = spring(t - (INTRO.r0 + i * INTRO.dt), 18, 0.42); if (s <= 0.001) continue;
    const a = -Math.PI / 2 + (i / N) * Math.PI * 2 + rot; const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
    const word = INTRO.ring.slice(0, i + 1).split(' ').length; // 1 OOPS, 2 OWL, 3 dot, ...
    c.save(); c.translate(x, y); c.rotate(a + Math.PI / 2); c.scale(s, s);
    c.fillStyle = '#0b1030'; c.fillText(ch, 6, 7);
    c.fillStyle = ch === '•' ? '#f3ead0' : (word % 3 === 2 ? '#f2b01c' : '#f3ead0'); c.fillText(ch, 0, 0);
    c.restore();
  }
  grade(c, { mul: GR.cool[0], sat: 0.95 });
  const fi = Math.floor(t * 24); c.globalCompositeOperation = 'overlay'; c.globalAlpha = 0.09; c.drawImage(ART.grain[fi % 6], -((fi * 37) % 300), -((fi * 53) % 200), Math.max(W, H) * 1.25, Math.max(W, H) * 1.25);
  c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
};
// intro music: the Moon Motif as the channel's theme
function introScore(K) {
  const { tone, noise, marimba, bass, clar, glock, pad, kick, snare, cym, hoot, wood, MUS, SFX } = K;
  pad(['D3', 'A3', 'E4', 'F#4'], 0.05, 5.1, 0.05);
  noise({ t: INTRO.rise, dur: 0.6, v: 0.15, f: 300, f2: 1600, q: 0.8 }); ['D3', 'A3', 'D4', 'F#4'].forEach((n, i) => marimba(n, INTRO.rise + i * 0.12, 0.14));
  glock('A6', INTRO.eyesOpen, 0.08, 0, 1.6); tone({ f: 200, glide: 480, glideT: 0.15, t: INTRO.eyesOpen + 0.02, dur: 0.2, v: 0.06, dest: SFX, vib: 14, vibD: 80, curve: 'lin' });
  const scale = ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'];
  for (let i = 0, k = 0; i < INTRO.ring.length; i++) { if (INTRO.ring[i] === ' ') continue; tone({ f: NOTE(scale[k % 6]), t: INTRO.r0 + i * INTRO.dt, dur: 0.12, v: 0.045, p: Math.cos(i / INTRO.ring.length * 6.28) * 0.6 }); k++; }
  OOPS_MOTIF.forEach((n, i) => clar(n, 1.6 + i * 0.3, i === 3 ? 0.42 : 0.28, 0.15));
  clar('D5', INTRO.resolve, 1.4, 0.15); ['D6', 'F#6', 'A6'].forEach((n, i) => glock(n, INTRO.resolve + i * 0.015, 0.07, (i - 1) * 0.4, 2)); bass('D2', INTRO.resolve, 1.0, 0.25); kick(INTRO.resolve, 0.25);
  hoot(INTRO.hoot[0], 345, 0.2, 0.28, 0); hoot(INTRO.hoot[1], 310, 0.34, 0.28, 0);
  ['D5', 'F#5', 'A5', 'D6'].forEach((n, i) => marimba(n, INTRO.happy + i * 0.09, 0.1));
  kick(INTRO.hit, 0.45); cym(INTRO.hit, 0.12); bass('D2', INTRO.hit, 0.6, 0.3); snare(INTRO.hit - 0.12, 0.12); snare(INTRO.hit - 0.06, 0.16);
}
const OOPS_MOTIF = ['A4', 'D5', 'E5', 'F#5'];

// ===================== OopsOwl library: shared helpers for writing stories =====================
// Everything here is global so a story file can use it directly.
const gy = x => edgeY(x) - 4;
const base = x => Object.assign({ twig: true, yaw: 0.8, gx: 0.4, gy: 0, sq: 1, lean: 0, ruffle: 0.15 }, SIT_FEET, x);
const owlAt = (c, o, x, y, dir, rot) => drawOwlWorld(c, o, x, y, dir, rot || 0);
const NIGHT = { mul: GR.cool[0], sat: GR.cool[1] };
const Sc = (cam, actors, o = {}) => Object.assign({ cam, moon: o.moon === undefined ? { x: W * 0.78, y: H * 0.16, r: 130 } : o.moon, actors, grade: o.grade || NIGHT, pond: true, back: o.back, front: o.front }, o.extra || {});
const path = (t, K) => { if (t <= K[0][0]) return K[0][1]; for (let i = 1; i < K.length; i++) if (t < K[i][0]) { const a = K[i - 1], b = K[i]; return lerp(a[1], b[1], sineInOut((t - a[0]) / (b[0] - a[0]))); } return K[K.length - 1][1]; };
const dpath = (t, K) => (path(t + 0.01, K) - path(t - 0.01, K)) / 0.02;
function smoke(c, T, src, t0, t1, rate, k = 1) { const r = mulberry(31); for (let t = t0; t < Math.min(T, t1); t += 1 / rate) { const a = T - t; if (a > 3) continue; const p = src(t); const x = p.x - 50 * a * k + (r() - 0.5) * 30, y = p.y - 60 * a - 20 * a * a; const rr = 8 + 22 * Math.sqrt(a); c.fillStyle = `rgba(120,124,140,${0.45 * (1 - a / 3)})`; c.beginPath(); c.arc(x, y, rr, 0, 7); c.arc(x + rr * 0.7, y - rr * 0.3, rr * 0.7, 0, 7); c.fill(); } }
const word = (c, txt, x, y, s, a, col = '#f3e7b0') => { if (a <= 0) return; c.save(); c.globalAlpha = clamp(a); c.font = '700 54px Fredoka';
  { const m = c.getTransform(); const k = m.a || 1; const half = c.measureText(txt).width * s * k / 2 + 24; const sx = m.a * x + m.e, sy = m.d * y + m.f; // keep sound words inside the frame (both aspects)
    const cx = half * 2 + 48 > W ? W / 2 : Math.min(Math.max(sx, half), W - half), cy = Math.min(Math.max(sy, 54 * s * k + 30), H - 30); x += (cx - sx) / k; y += (cy - sy) / (m.d || 1); }
  c.translate(x, y); c.scale(s, s); c.textAlign = 'center'; c.fillStyle = 'rgba(10,12,30,0.8)'; c.fillText(txt, 3, 3); c.fillStyle = col; c.fillText(txt, 0, 0); c.restore(); };
function starShape(c, x, y, r, rot, col = '#f6dc7a') { c.save(); c.translate(x, y); c.rotate(rot); c.fillStyle = col; c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fill(); c.fillStyle = '#fff3c0'; c.beginPath(); c.arc(-r * 0.12, -r * 0.15, r * 0.22, 0, 7); c.fill(); c.restore(); }
function streak(c, T, t0, dur, x0, y0, x1, y1) { const u = (T - t0) / dur; if (u < 0 || u > 1.25) return; const h = Math.min(u, 1), tl = Math.max(0, u - 0.25); const p = a => ({ x: lerp(x0, x1, a), y: lerp(y0, y1, a) }); const A = p(tl), B = p(h); c.strokeStyle = 'rgba(255,240,190,0.75)'; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(A.x, A.y); c.lineTo(B.x, B.y); c.stroke(); if (u <= 1) starShape(c, B.x, B.y, 9, T * 6, '#fff6d0'); }
function bubble(c, x, y, s, a, inner) { if (a <= 0) return; c.save(); c.globalAlpha = a; c.translate(x, y); c.scale(s, s); c.fillStyle = 'rgba(235,238,250,0.92)'; for (const [bx, by, br] of [[-40, 0, 34], [0, -14, 40], [40, 0, 34], [0, 18, 34]]) { c.beginPath(); c.arc(bx, by, br, 0, 7); c.fill(); } for (const [bx, by, br] of [[-60, 62, 10], [-78, 86, 6]]) { c.beginPath(); c.arc(bx, by, br, 0, 7); c.fill(); } inner(c); c.restore(); }
const medalIcon = c => { c.strokeStyle = '#b93a3a'; c.lineWidth = 6; c.beginPath(); c.moveTo(-16, -36); c.lineTo(0, -8); c.lineTo(16, -36); c.stroke(); c.fillStyle = '#e2b13c'; c.beginPath(); c.arc(0, 10, 20, 0, 7); c.fill(); c.fillStyle = '#f6d77a'; c.beginPath(); c.arc(-4, 6, 8, 0, 7); c.fill(); };
function bug(c, x, y, b, s = 1) { c.fillStyle = `rgba(226,240,110,${0.16 * b})`; c.beginPath(); c.arc(x, y, 6 * s, 0, 7); c.fill(); c.fillStyle = `rgba(240,252,140,${0.6 + 0.4 * b})`; c.beginPath(); c.arc(x, y, 2.6 * s, 0, 7); c.fill(); c.fillStyle = 'rgba(255,255,225,0.9)'; c.beginPath(); c.arc(x - 0.6 * s, y - 0.6 * s, 1.1 * s, 0, 7); c.fill(); }
function cloud(c, x, y, s, mood, T) {
      c.save(); c.translate(x, y); c.scale(s, s);
      const blobs = [[-34, 6, 22], [-12, -8, 28], [16, -4, 24], [36, 8, 18], [0, 10, 26]];
      c.fillStyle = '#5d6684'; for (const [bx, by, br] of blobs) { c.beginPath(); c.arc(bx + 3, by + 5, br, 0, 7); c.fill(); }
      c.fillStyle = mood === 'blush' ? '#c9b3c6' : (mood === 'storm' ? '#5a6180' : '#9aa3c2'); if (mood === 'storm') { c.restore(); c.save(); c.translate(x, y); c.scale(s, s); c.fillStyle = '#3d4360'; for (const [bx, by, br] of blobs) { c.beginPath(); c.arc(bx + 3, by + 6, br, 0, 7); c.fill(); } c.fillStyle = '#5a6180'; for (const [bx, by, br] of blobs) { c.beginPath(); c.arc(bx, by, br, 0, 7); c.fill(); } c.restore(); return; } for (const [bx, by, br] of blobs) { c.beginPath(); c.arc(bx, by, br, 0, 7); c.fill(); }
      c.fillStyle = '#20243a'; const sad = mood === 'sad', happy = mood === 'happy' || mood === 'blush';
      if (happy) { c.strokeStyle = '#20243a'; c.lineWidth = 3; c.lineCap = 'round'; for (const sx of [-12, 12]) { c.beginPath(); c.arc(sx, 2, 5, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); } c.beginPath(); c.arc(0, 10, 6, 0.2, Math.PI - 0.2); c.stroke(); if (mood === 'blush') { c.fillStyle = 'rgba(230,140,160,0.7)'; for (const sx of [-22, 22]) { c.beginPath(); c.ellipse(sx, 10, 6, 3.5, 0, 0, 7); c.fill(); } } }
      else { for (const sx of [-12, 12]) { c.beginPath(); c.arc(sx, 2, 3.5, 0, 7); c.fill(); } c.lineWidth = 2.5; c.strokeStyle = '#20243a'; c.beginPath(); if (sad) c.arc(0, 16, 6, Math.PI + 0.3, -0.3); else c.moveTo(-5, 12), c.lineTo(5, 12); c.stroke(); }
      c.restore();
    }
function rain(c, x, y0, y1, w, T, dens = 1) { const r = mulberry(19); c.strokeStyle = 'rgba(170,190,235,0.6)'; c.lineWidth = 2; c.beginPath(); const n = Math.floor(26 * dens);
      for (let i = 0; i < n; i++) { const px = x + (r() - 0.5) * w; const sp = 700 + r() * 300; const ph = r(); const y = y0 + (((T * sp / (y1 - y0)) + ph) % 1) * (y1 - y0); c.moveTo(px, y); c.lineTo(px - 2, y + 18); } c.stroke(); }
const hopTimes = (t0, pts) => { const o = []; let t = t0; for (let i = 1; i < pts.length; i++) { t += pts[i][2]; o.push([t, pts[i][0]]); } return o; };
const stone = (c, p, rot) => { if (!p) return; c.save(); c.translate(p.x, p.y); c.rotate(rot || 0); c.scale(1.7, 1.7); c.fillStyle = '#8a8f9e'; c.beginPath(); c.ellipse(0, 0, 11, 5, 0, 0, 7); c.fill(); c.fillStyle = '#b4b8c4'; c.beginPath(); c.ellipse(-2, -1.5, 6, 2, 0, 0, 7); c.fill(); c.restore(); };
const flag = (c, x) => { const y = gy(x); c.strokeStyle = '#ddd6c2'; c.lineWidth = 4; for (const dx of [-6, 6]) { c.beginPath(); c.moveTo(x + dx, y + 4); c.lineTo(x + dx, y - 150); c.stroke(); } c.fillStyle = '#efe9d8'; c.fillRect(x - 3, y - 2, 6, 6);
for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) { c.fillStyle = (i + j) % 2 ? '#1a1a1a' : '#efe9d8'; c.fillRect(x + 6 + i * 14, y - 150 + j * 14, 14, 14); } c.strokeStyle = 'rgba(240,235,220,0.7)'; c.lineWidth = 2; c.setLineDash([10, 8]); c.beginPath(); c.moveTo(x, y + 4); c.lineTo(x, y + 30); c.stroke(); c.setLineDash([]); };
const cone = (c, x, y, dir, s = 1) => { c.save(); c.translate(x, y); c.scale(dir * s, s); c.fillStyle = '#4c7a4a'; c.beginPath(); c.moveTo(0, -6); c.lineTo(56, -24); c.lineTo(56, 24); c.lineTo(0, 6); c.closePath(); c.fill(); c.strokeStyle = '#2f4f30'; c.lineWidth = 2; c.beginPath(); c.moveTo(10, 0); c.lineTo(56, 0); c.stroke(); c.restore(); };
const bigWord = (c, txt, x, y, s, T, t0) => { const a = clamp(1 - (T - t0 - 0.9) / 0.4); if (T < t0 || a <= 0) return; word(c, txt, x, y, s * (1 + 0.25 * spring(T - t0, 12, 0.45)), a); };
function owlEyes(c, o, x, y, dir, rot) {
    const p = LX; LX = dir; c.save(); c.translate(x, y); c.scale(dir, 1); c.rotate(rot || 0);
    const hp = owlHeadPos(o); c.translate(hp.x, hp.y); c.rotate(o.tilt || 0); const hs = o.headS || 1; c.scale(hs * (o.hsx || 1), hs * (o.hsy || 1));
    const RX = 37, yaw = o.yaw || 0;
    for (const lam of [-0.40, 0.40]) { const a = lam + yaw, cc = Math.cos(a); if (cc <= 0.08) continue; const ex = RX * 0.8 * Math.sin(a), er = 10.5 * (o.eyeS || 1); drawEye(c, ex, -1, er * Math.pow(cc, 0.85), er, o, Math.sign(lam), cc); }
    c.restore(); LX = p;
  }
function turtleEyes(c, t) {
    const nk = clamp(t.neck == null ? 1 : t.neck); if (nk <= 0.12) return;
    c.save(); c.translate(t.x, t.y); c.scale(t.dir || 1, 1); c.rotate(t.tilt || 0);
    const hx = 50 + 34 * nk, hy = -18 - 8 * nk + (t.headDY || 0); const ex = hx + 13, ey = hy - 7, er = 6.2 * (t.eyeS || 1);
    c.fillStyle = '#f4f0dd'; c.beginPath(); c.arc(ex, ey, er, 0, 7); c.fill();
    c.fillStyle = '#16120e'; c.beginPath(); c.arc(ex + 1.6 + (t.gx || 0) * 2, ey + (t.gy || 0) * 2, er * 0.55, 0, 7); c.fill();
    const lid = clamp(t.lid || 0); if (lid > 0) { c.fillStyle = '#05060c'; c.fillRect(ex - er - 1, ey - er - 1, 2 * er + 2, (2 * er + 2) * lid); }
    c.restore();
  }
function bigEyes(c, x, y, s, open, look, smile) {
    if (open <= 0.01) return;
    for (const sd of [-1, 1]) {
      const ex = x + sd * 1.25 * s, ey = y; const rx = s * 0.78, ry = s * 0.62 * open;
      c.save(); c.translate(ex, ey); c.rotate(sd * 0.08);
      if (smile > 0.5) { c.strokeStyle = '#e7dc8e'; c.lineWidth = s * 0.16; c.lineCap = 'round'; c.beginPath(); c.moveTo(-rx * 0.85, ry * 0.25); c.quadraticCurveTo(0, -ry * 1.1, rx * 0.85, ry * 0.25); c.stroke(); c.restore(); continue; }
      c.fillStyle = '#e7dc8e'; c.beginPath(); c.ellipse(0, 0, rx, Math.max(1, ry), 0, 0, 7); c.fill();
      c.save(); c.beginPath(); c.ellipse(0, 0, rx, Math.max(1, ry), 0, 0, 7); c.clip();
      c.fillStyle = '#c9b65a'; c.beginPath(); c.ellipse((look.x || 0) * rx * 0.35, (look.y || 0) * ry * 0.3, rx * 0.5, s * 0.5, 0, 0, 7); c.fill();
      c.fillStyle = '#07070a'; c.beginPath(); c.ellipse((look.x || 0) * rx * 0.38, (look.y || 0) * ry * 0.32, s * 0.15, s * 0.4, 0, 0, 7); c.fill();
      c.restore(); c.restore();
    }
  }
const hops = (T, t0, pts) => { // pts: [[x, y, 0, 0] start, then [x, y, dur, height] per hop]; returns {x, y, i, done}
  let t = T - t0; if (t < 0) return null; for (let i = 1; i < pts.length; i++) { const d = pts[i][2]; if (t < d) { const u = t / d; return { x: lerp(pts[i - 1][0], pts[i][0], u), y: lerp(pts[i - 1][1], pts[i][1], u) - pts[i][3] * 4 * u * (1 - u), i }; } t -= d; } const p = pts[pts.length - 1]; return { x: p[0], y: p[1], i: pts.length, done: true };
};

const TITLE = 2.8; // default title-card length
const ENGINE_KEYS = [], ENGINE_COUGHS = []; // engine sound keys [t, rpm, load] collected by bikeWipe / engineKeys; used by OopsOwl.defaultEngine
const engineKeys = list => { for (const k of list) ENGINE_KEYS.push(k); };
// title card: big title on the night sky, a little owl peeking up. Adds a shot from t0 to t0+len.
function titleCard(name, t0, text, len = TITLE) {
  shot(name, t0, t0 + len, (lt, T) => ({
    custom: () => {
      const c = ctx; c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
      c.drawImage(ART.sky, 0, 0); const mr = 120; c.drawImage(ART.moon, W * 0.81 - mr * 320 / 300, H * 0.21 - mr * 320 / 300, mr * 640 / 300, mr * 640 / 300);
      const pin = spring(lt - 0.15, 9, 0.5), out = 1 - expoIn(clamp((lt - (len - 0.35)) / 0.35)); const s1 = pin * out;
      c.textAlign = 'center'; c.textBaseline = 'middle';
      let fs = text.length > 18 ? 120 : 160; c.font = `700 ${fs}px Fredoka`; const tw = c.measureText(text).width; if (tw > W * 0.88) fs = Math.floor(fs * W * 0.88 / tw);
      c.save(); c.translate(W / 2, H * 0.444); c.scale(s1, s1); c.font = `700 ${fs}px Fredoka`; c.fillStyle = '#0b1030'; c.fillText(text, 7, 7); c.fillStyle = '#f3ead0'; c.fillText(text, 0, 0); c.restore();
      const pk = sineInOut(clamp((lt - 0.6) / 0.5)) * out; c.setTransform(1.5, 0, 0, 1.5, W * 0.72, H + 260 - 230 * pk); LX = 1; drawOwl(c, base({ yaw: 0.2, gx: -0.8, gy: -0.6, happy: lt > 1.5 && lt < 2.2 ? 1 : 0 }), 'all');
      c.setTransform(1, 0, 0, 1, 0, 0); c.textAlign = 'left'; c.textBaseline = 'alphabetic';
      grade(c, { mul: GR.cool[0], sat: 0.95 });
    }
  }));
}
// the signature wipe: Owl rides across the screen on his bike, revealing the next shot behind him. Adds a 2 s shot at t0 and its engine sound.
function owlRideFn(T, sx) { return (x) => { camT(x, RIDE_CAM); const b = riderBike(sx, H - 150, sx / 84); b.shakeY = idleShake(T, 1.2, 30); b.light = true; drawBikeOwl(x, b, ride({ lean: 0.38, sq: 0.94, yaw: 0.7, gx: 0.8, gy: 0.2, lid: 0.15, angry: 0.6, twig: true, tuft: -0.4 })); }; }
function bikeWipe(name, t0) {
  shot(name, t0, t0 + 2, (lt, T) => ({ custom: () => { const u = lt / 2; const sx = lerp(-650, W + 730, sineInOut(u) * 0.35 + u * 0.65); wipeShot(T, t0 - 0.001, t0 + 2 + 0.001, sx, owlRideFn(T, sx), 1980, 'cool'); } }));
  engineKeys([[t0 - 0.02, 900, 0], [t0, 3500, 0.8], [t0 + 0.3, 9800, 1.1], [t0 + 1.65, 9300, 1.0], [t0 + 2, 2000, 0]]);
}
// darkness: returns a post-hook that blacks out the frame by d(T) (0..1) and, when dark, redraws only eyes(c) in world space
function blackout(T, cam, d, eyes) {
  return c => { const k = d(T); if (k <= 0.001) return; c.setTransform(1, 0, 0, 1, 0, 0); c.fillStyle = `rgba(2,3,8,${0.985 * k})`; c.fillRect(0, 0, W, H); if (k > 0.5 && eyes) { camT(c, cam); eyes(c); c.setTransform(1, 0, 0, 1, 0, 0); } };
}
// the OopsOwl end card (custom shot)
function endCard(name, t0, len = 2.5) {
  shot(name, t0, t0 + len, (lt, T) => ({
    custom: () => {
      const c = ctx; c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
      const DY = (H - 1080) / 2;
      c.drawImage(ART.sky, 0, 0); const mr = 230; c.drawImage(ART.moon, W / 2 - mr * 320 / 300, 380 + DY - mr * 320 / 300, mr * 640 / 300, mr * 640 / 300);
      const u = clamp((lt - 0.05) / 2.35); const fx = lerp(-260, W + 340, u), fy = 380 + DY - 90 * Math.sin(Math.PI * u);
      c.setTransform(1.6, 0, 0, 1.6, fx, fy); LX = 1; drawOwl(c, flyPose(lt * 2 * Math.PI * 2.6, { yaw: 0.7 }), 'all');
      c.setTransform(1, 0, 0, 1, 0, 0);
      const pop = spring(lt - 0.5, 10, 0.45) * Math.min(1, W / 1300); c.save(); c.translate(W / 2, 800 + DY); c.scale(pop, pop);
      c.font = '700 190px Fredoka'; c.textBaseline = 'middle'; c.textAlign = 'left';
      const wOops = c.measureText('Oops').width, wAll = c.measureText('OopsOwl').width;
      c.fillStyle = '#0b1030'; c.fillText('OopsOwl', -wAll / 2 + 8, 8); c.fillStyle = '#f3ead0'; c.fillText('Oops', -wAll / 2, 0); c.fillStyle = '#f2b01c'; c.fillText('Owl', -wAll / 2 + wOops, 0);
      c.restore(); c.textBaseline = 'alphabetic'; grade(c, { mul: GR.cool[0], sat: 0.95 });
    }
  }));
}

// audio helpers built on the score kit: const X = sfx(K); X.groove(...), X.music(...), ...
function sfx(K) {
  const { tone, noise, marimba, bass, clar, mbox, glock, pad, wah, whistle, kick, snare, hat, cym, timp, wood, thud, clang, hoot, splashS, plink, creak, rustle, MUS, SFX, AMB, mg, ac } = K;
  const music = (v, t) => mg.setValueAtTime(v, Math.max(0, t));
  const fade = (v, t) => mg.linearRampToValueAtTime(v, Math.max(0, t));
  const flaps = (t0, t1, rate, v = 0.12, p = 0) => { for (let t = t0; t < t1; t += 1 / rate) noise({ t, dur: 0.09, v, f: 500, f2: 1400, q: 0.9, a: 0.02, p }); };
  const steps = (t0, t1, rate, v = 0.05, p = 0) => { for (let t = t0; t < t1; t += 1 / rate) noise({ t, dur: 0.04, v, type: 'lowpass', f: 700, p }); };
  const tok = (t, v = 0.2, p = 0) => { tone({ f: 240, t, dur: 0.09, v, dest: SFX, p }); noise({ t, dur: 0.03, v: v * 0.5, f: 900, q: 3, p }); };
  const ting = (t, f = 2600, v = 0.06, p = 0) => { tone({ f, t, dur: 0.5, v, dest: SFX, p }); tone({ f: f * 2.4, t, dur: 0.15, v: v * 0.4, dest: SFX, p }); };
  const chirp = (t, v = 0.06) => { for (let i = 0; i < 3; i++) tone({ f: 3800 + i * 300, glide: 5200, glideT: 0.04, t: t + i * 0.07, dur: 0.05, v, dest: SFX, p: 0.2 }); };
  const blub = (t, v = 0.12) => tone({ f: 180, glide: 520, glideT: 0.06, t, dur: 0.08, v, dest: SFX });
  const skip = (t, v = 0.1) => { noise({ t, dur: 0.08, v, f: 1600, f2: 900, q: 1.5 }); tone({ f: 900, glide: 1500, glideT: 0.05, t, dur: 0.06, v: v * 0.5, dest: SFX }); };
  const groove = (t0, t1, bpm, bassN, melN, v = 1) => { const bt = 60 / bpm; let i = 0; for (let t = t0; t < t1 - 0.05; t += bt / 2, i++) { if (i % 2 === 0) bass(bassN[(i >> 1) % bassN.length], t, 0.18, 0.22 * v); else if (i % 4 === 3) marimba(melN[(i >> 2) % melN.length], t, 0.08 * v); else hat(t, 0.035 * v); } };
  // stings that match titleCard() and bikeWipe()
  const titleSting = t0 => { music(0.6, t0); glock('D6', t0 + 0.15, 0.08); ['A4', 'D5', 'E5', 'F#5'].forEach((n, i) => mbox(n, t0 + 0.35 + i * 0.16, 0.09)); hoot(t0 + 1.3, 330, 0.18, 0.12, 0.4); tone({ f: 600, glide: 1400, glideT: 0.25, t: t0 + TITLE - 0.35, dur: 0.3, v: 0.05, dest: SFX }); };
  const wipeSting = w => { for (let i = 0; i < 12; i++) snare(w - 0.55 + i * 0.045, 0.02 + i * 0.012); music(0.55, w); noise({ t: w + 0.1, dur: 1.6, v: 0.22, f: 400, f2: 2200, q: 0.7, p: -0.2 }); cym(w + 1.95, 0.1); };
  const endSting = t0 => { music(0.6, t0); noise({ t: t0 + 0.2, dur: 1.6, v: 0.15, f: 500, f2: 1500 }); pad(['D3', 'A3', 'D4', 'F#4'], t0 + 0.1, 2.3, 0.06); ['A4', 'D5', 'E5', 'F#5', 'D5'].forEach((n, i) => mbox(n, t0 + 0.35 + i * 0.3, 0.12)); bass('D2', t0 + 0.35, 1.7, 0.25); };
  return { music, fade, flaps, steps, tok, ting, chirp, blub, skip, groove, titleSting, wipeSting, endSting };
}

// ===================== OopsOwl player + in-browser exporter =====================
// A story page defines its shots with shot(...), then calls OopsOwl.film({ title, duration, score }).
// The player plays it with sound, and "Export video" renders every frame and encodes a 1920x1080 WebM
// (VP9 + Opus) entirely in the browser with WebCodecs, no server and no ffmpeg needed.
window.OopsOwl = (function () {
  const FPS = 24;
  let cfg = null, total = 0, introLen = 0, audioBuf = null, playing = false, t0Wall = 0, tStart = 0, actx = null, src = null, ui = {};
  function frameAt(t) {
    if (t < introLen) { window.seekIntro(t); return; }
    const T = Math.min(cfg.duration - 1e-3, t - introLen);
    const s = shotAt(T); const S = s.fn(T - s.t0, T); if (S.custom) S.custom(); else compose(T, S);
  }
  async function buildAudio() {
    const parts = [];
    if (cfg.intro) parts.push(await renderAudio(3, { raw: true }));
    window.SCORE_LEN = cfg.duration;
    window.SCORE = K => { OopsOwl.defaultEngine(K); if (cfg.score) cfg.score(K); };
    parts.push(await renderAudio('custom', { raw: true }));
    const SR = parts[0].sampleRate; const n = Math.round(total * SR);
    const out = new AudioBuffer({ length: n, numberOfChannels: 2, sampleRate: SR });
    let off = 0; let pk = 0;
    for (let i = 0; i < parts.length; i++) { const p = parts[i]; const len = Math.round((i === 0 && cfg.intro ? introLen : cfg.duration) * SR);
      for (let ch = 0; ch < 2; ch++) { const d = p.getChannelData(ch).subarray(0, Math.min(len, p.length)); out.getChannelData(ch).set(d.subarray(0, Math.min(d.length, n - off)), off); }
      off += len; }
    for (let ch = 0; ch < 2; ch++) { const d = out.getChannelData(ch); for (let i = 0; i < d.length; i++) pk = Math.max(pk, Math.abs(d[i])); }
    const g = 0.89 / (pk || 1); for (let ch = 0; ch < 2; ch++) { const d = out.getChannelData(ch); for (let i = 0; i < d.length; i++) d[i] *= g; }
    return out;
  }
  // ---------- aspect ----------
  function setAspect(a) {
    const tall = a === '9:16'; VERTICAL = tall; W = tall ? 1080 : 1920; H = tall ? 1920 : 1080;
    offOld = null; offNew = null; setupCanvas(); buildArt();
    const cvs = document.getElementById('c'); if (cvs) cvs.classList.toggle('tall', tall);
    if (ui.asp) ui.asp.textContent = tall ? '9:16' : '16:9';
  }
  // ---------- UI ----------
  function mkUI() {
    const css = document.createElement('style');
    css.textContent = `body{margin:0;background:#0b0d1a;color:#e8e4d8;font:14px/1.4 system-ui,sans-serif}#oo-wrap{max-width:1280px;margin:0 auto;padding:12px}
#c{display:block;background:#000;border-radius:8px;margin:0 auto;width:100%;height:auto;max-height:78vh;object-fit:contain}#c.tall{width:auto;height:78vh}
#oo-bar{display:flex;gap:10px;align-items:center;margin-top:10px;flex-wrap:wrap}#oo-bar button{background:#f2b01c;color:#111;border:0;border-radius:6px;padding:8px 14px;font-weight:700;cursor:pointer}
#oo-bar button.sec{background:#2a2f4a;color:#e8e4d8}#oo-bar button:disabled{opacity:.5;cursor:default}#oo-seek{flex:1;min-width:200px}#oo-t{font-variant-numeric:tabular-nums;min-width:110px}
#oo-msg{margin-top:8px;opacity:.8}#oo-title{font-weight:700;font-size:18px;margin:0 0 8px}`;
    document.head.appendChild(css);
    const wrap = document.createElement('div'); wrap.id = 'oo-wrap';
    const h = document.createElement('div'); h.id = 'oo-title'; h.textContent = cfg.title || 'OopsOwl'; wrap.appendChild(h);
    let cvs = document.getElementById('c'); if (!cvs) { cvs = document.createElement('canvas'); cvs.id = 'c'; } wrap.appendChild(cvs);
    const bar = document.createElement('div'); bar.id = 'oo-bar';
    bar.innerHTML = `<button id="oo-play" disabled>Loading…</button><input id="oo-seek" type="range" min="0" max="1000" value="0"><span id="oo-t">0:00 / 0:00</span><button id="oo-asp" class="sec" disabled>16:9</button><button id="oo-exp" class="sec" disabled>Export video</button>`;
    wrap.appendChild(bar); const msg = document.createElement('div'); msg.id = 'oo-msg'; wrap.appendChild(msg);
    document.body.appendChild(wrap);
    ui = { play: bar.querySelector('#oo-play'), seek: bar.querySelector('#oo-seek'), t: bar.querySelector('#oo-t'), exp: bar.querySelector('#oo-exp'), asp: bar.querySelector('#oo-asp'), msg };
    ui.asp.onclick = () => { pause(); setAspect(VERTICAL ? '16:9' : '9:16'); draw(tStart); };
    ui.play.onclick = () => playing ? pause() : play();
    ui.seek.oninput = () => { const t = ui.seek.value / 1000 * total; if (playing) { pause(); } tStart = t; draw(t); };
    ui.exp.onclick = () => exportVideo();
  }
  const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  function draw(t) { frameAt(t); if (ui.t) { ui.t.textContent = `${fmt(t)} / ${fmt(total)}`; ui.seek.value = Math.round(t / total * 1000); } }
  function play() {
    if (!audioBuf) return; actx = actx || new AudioContext({ sampleRate: audioBuf.sampleRate });
    if (tStart >= total - 0.05) tStart = 0;
    src = actx.createBufferSource(); src.buffer = audioBuf; src.connect(actx.destination); src.start(0, tStart); t0Wall = actx.currentTime - tStart; playing = true; ui.play.textContent = 'Pause';
    const loop = () => { if (!playing) return; const t = actx.currentTime - t0Wall; if (t >= total) { pause(); tStart = 0; return; } draw(t); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
  function pause() { if (src) { try { src.stop(); } catch (e) { } src = null; } if (actx && playing) tStart = actx.currentTime - t0Wall; playing = false; if (ui.play) ui.play.textContent = 'Play'; }
  // ---------- export ----------
  async function encode(onProgress) {
    if (!('VideoEncoder' in window)) throw new Error('This browser has no WebCodecs. Use desktop Chrome or Edge.');
    const frames = Math.round(total * FPS);
    let vcodec = 'vp09.00.40.08'; const sup = await VideoEncoder.isConfigSupported({ codec: vcodec, width: W, height: H, bitrate: 10e6, framerate: FPS }).catch(() => ({ supported: false }));
    if (!sup.supported) vcodec = 'vp8';
    const muxer = new WebMMuxer.Muxer({ target: new WebMMuxer.ArrayBufferTarget(), video: { codec: vcodec === 'vp8' ? 'V_VP8' : 'V_VP9', width: W, height: H, frameRate: FPS }, audio: { codec: 'A_OPUS', sampleRate: 48000, numberOfChannels: 2 }, firstTimestampBehavior: 'offset' });
    let err = null;
    const ve = new VideoEncoder({ output: (ch, meta) => muxer.addVideoChunk(ch, meta), error: e => err = e });
    ve.configure({ codec: vcodec, width: W, height: H, bitrate: 10e6, framerate: FPS, latencyMode: 'quality' });
    for (let i = 0; i < frames; i++) {
      if (err) throw err;
      frameAt(i / FPS);
      const vf = new VideoFrame(document.getElementById('c'), { timestamp: Math.round(i * 1e6 / FPS), duration: Math.round(1e6 / FPS) });
      ve.encode(vf, { keyFrame: i % (FPS * 2) === 0 }); vf.close();
      if (ve.encodeQueueSize > 6) await new Promise(r => { const chk = () => ve.encodeQueueSize > 2 ? setTimeout(chk, 5) : r(); chk(); });
      if (i % 12 === 0) { onProgress && onProgress(i / frames * 0.9); await new Promise(r => setTimeout(r, 0)); }
    }
    await ve.flush(); ve.close();
    // audio: resample the score to 48 kHz if needed, then Opus
    let buf = audioBuf; if (buf.sampleRate !== 48000) { const oc = new OfflineAudioContext(2, Math.round(buf.duration * 48000), 48000); const s = oc.createBufferSource(); s.buffer = buf; s.connect(oc.destination); s.start(); buf = await oc.startRendering(); }
    const ae = new AudioEncoder({ output: (ch, meta) => muxer.addAudioChunk(ch, meta), error: e => err = e });
    ae.configure({ codec: 'opus', sampleRate: 48000, numberOfChannels: 2, bitrate: 192000 });
    const L = buf.getChannelData(0), R = buf.getChannelData(1); const CH = 4800;
    for (let i = 0; i < buf.length; i += CH) {
      const n = Math.min(CH, buf.length - i); const data = new Float32Array(n * 2); data.set(L.subarray(i, i + n), 0); data.set(R.subarray(i, i + n), n);
      const ad = new AudioData({ format: 'f32-planar', sampleRate: 48000, numberOfFrames: n, numberOfChannels: 2, timestamp: Math.round(i * 1e6 / 48000), data }); ae.encode(ad); ad.close();
      if ((i / CH) % 50 === 0) { onProgress && onProgress(0.9 + 0.1 * i / buf.length); await new Promise(r => setTimeout(r, 0)); }
    }
    await ae.flush(); ae.close(); if (err) throw err;
    muxer.finalize(); return new Blob([muxer.target.buffer], { type: 'video/webm' });
  }
  async function exportVideo() {
    pause(); ui.exp.disabled = true; ui.play.disabled = true; ui.asp.disabled = true; const t0 = performance.now();
    try {
      const blob = await encode(p => { ui.msg.textContent = `Rendering… ${Math.round(p * 100)}%`; });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = (cfg.file || cfg.title || 'oopsowl').replace(/[^\w\-]+/g, '_') + (VERTICAL ? '_9x16' : '_16x9') + '.webm'; document.body.appendChild(a); a.click();
      ui.msg.textContent = `Done in ${Math.round((performance.now() - t0) / 1000)} s — ${W}×${H} ${(blob.size / 1e6).toFixed(1)} MB WebM downloaded (YouTube accepts WebM).`;
    } catch (e) { ui.msg.textContent = 'Export failed: ' + e.message; }
    ui.exp.disabled = false; ui.play.disabled = false; ui.asp.disabled = false;
  }
  return {
    FPS,
    // default engine sound: plays the bike keys collected by bikeWipe()/engineKeys() and any coughs
    defaultEngine(K) { if (!ENGINE_KEYS.length) return; const keys = ENGINE_KEYS.slice().sort((a, b) => a[0] - b[0]); keys.unshift([0, 0, 0]); keys.push([cfg.duration + 1, 0, 0]); K.engineSynth(keys, ENGINE_COUGHS.slice(), pp => { pp.setValueAtTime(0, 0); }); },
    async film(opts) {
      cfg = Object.assign({ intro: true, duration: 30, title: 'OopsOwl' }, opts);
      introLen = cfg.intro ? INTRO_LEN : 0; total = introLen + cfg.duration;
      SH.sort((a, b) => a.t0 - b.t0);
      window.seek = t => frameAt(t); window.TOTAL = total;
      if (!cfg.headless) mkUI();
      if (cfg.verticalZoom) VZOOM = cfg.verticalZoom;
      let asp = cfg.aspect; try { const q = new URLSearchParams(location.search).get('aspect'); if (q) asp = q.replace('x', ':'); } catch (e) { }
      setAspect(asp === '9:16' ? '9:16' : '16:9'); await document.fonts.load('700 100px Fredoka');
      draw(0);
      if (!cfg.headless) ui.msg.textContent = 'Preparing sound…';
      audioBuf = await buildAudio();
      if (!cfg.headless) { ui.play.disabled = false; ui.play.textContent = 'Play'; ui.exp.disabled = false; ui.asp.disabled = false; ui.msg.textContent = `Ready — ${fmt(total)} at ${FPS} fps. The 16:9 / 9:16 button switches the frame; Export renders the current one with sound in this browser.`; }
      window.ready = true; return { total };
    },
    encode, frameAt, setAspect, get audio() { return audioBuf; }
  };
})();

SH.length = 0; RIPPLES.length = 0; // story files add their own shots
