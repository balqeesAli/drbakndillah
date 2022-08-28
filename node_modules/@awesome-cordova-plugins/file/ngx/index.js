import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaPropertyGet, cordovaPropertySet, getPromise } from '@awesome-cordova-plugins/core';
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     *
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @param err
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return getPromise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param dr
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param de
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param writer
     * @param gu
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @param writer
     * @param file
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        /**
         *
         */
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return getPromise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return cordovaPropertyGet(this, "dataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "cacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalApplicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalCacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalRootDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return cordovaPropertyGet(this, "tempDirectory"); },
        set: function (value) { cordovaPropertySet(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "syncedDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return cordovaPropertyGet(this, "documentsDirectory"); },
        set: function (value) { cordovaPropertySet(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return cordovaPropertyGet(this, "sharedDirectory"); },
        set: function (value) { cordovaPropertySet(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    File.decorators = [
        { type: Injectable }
    ];
    return File;
}(AwesomeCordovaNativePlugin));
export { File };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx5RkFLTCxVQUFVLEVBQ1gsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzcEJiLHdCQUEwQjs7O1FBOERsRCxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQVFGLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENB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bkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBCQWgyQmtCLHNDQUFvQjs7Ozs7OzBCQUtwQiw2Q0FBMkI7Ozs7OzswQkFLM0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7OztnQkE3RG5DLFVBQVU7O2VBNXBCWDtFQTZwQjBCLDBCQUEwQjtTQUF2QyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGdldFByb21pc2UsXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZDogbnVtYmVyO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBTaXplIGluIGJ5dGVzXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKiBGaWxlIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFwic2xpY2VcIiBvZiB0aGUgZmlsZS4gU2luY2UgQ29yZG92YSBGaWxlcyBkb24ndCBjb250YWluIHRoZSBhY3R1YWxcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxuICAgKiBTbGljZXMgb2Ygc2xpY2VzIGFyZSBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxuICAgKi9cbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHdpdGggbm8gZ3VhcmFudGVlIG9mIHBlcnNpc3RlbmNlLlxuICAgKi9cbiAgVEVNUE9SQVJZOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXG4gICAqL1xuICBQRVJTSVNURU5UOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBXaGV0aGVyIHRoZSBmaWxlc3lzdGVtIHJlcXVlc3RlZCBzaG91bGQgYmUgcGVyc2lzdGVudCwgYXMgZGVmaW5lZCBhYm92ZS4gVXNlIG9uZSBvZiBURU1QT1JBUlkgb3JcbiAgICogICBQRVJTSVNURU5ULlxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBhZ2VudCBwcm92aWRlcyBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgZmlsZXN5c3RlbSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGxvb2sgdXAgdGhlIEVudHJ5IGZvciBhIGZpbGUgb3IgZGlyZWN0b3J5IHJlZmVycmVkIHRvIGJ5IGEgbG9jYWwgVVJMLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIEEgVVJMIHJlZmVycmluZyB0byBhIGxvY2FsIGZpbGUgaW4gYSBmaWxlc3lzdGVtIGFjY2Vzc2FibGUgdmlhIHRoaXMgQVBJLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmVwb3J0IHRoZSBGaWxlRW50cnkgdG8gd2hpY2ggdGhlIHN1cHBsaWVkIFVSTCByZWZlcnMuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHVybDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIHNlZSByZXF1ZXN0RmlsZVN5c3RlbS5cbiAgICovXG4gIHdlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3YXMgbGFzdCBtb2RpZmllZC5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBtb2RpZmljYXRpb25UaW1lOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuIFRoaXMgbXVzdCByZXR1cm4gMCBmb3IgZGlyZWN0b3JpZXMuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdzIHtcbiAgLyoqXG4gICAqIFVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjcmVhdGUgYSBmaWxlIG9yIGRpcmVjdG9yeSBpZiBpdCB3YXMgbm90IHByZXZpb3VzbHkgdGhlcmUuXG4gICAqL1xuICBjcmVhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCeSBpdHNlbGYsIGV4Y2x1c2l2ZSBtdXN0IGhhdmUgbm8gZWZmZWN0LiBVc2VkIHdpdGggY3JlYXRlLCBpdCBtdXN0IGNhdXNlIGdldEZpbGUgYW5kIGdldERpcmVjdG9yeSB0byBmYWlsIGlmIHRoZVxuICAgKiB0YXJnZXQgcGF0aCBhbHJlYWR5IGV4aXN0cy5cbiAgICovXG4gIGV4Y2x1c2l2ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUgc3lzdGVtLiBUaGUgc3BlY2lmaWNzIG9mIG5hbWluZyBmaWxlc3lzdGVtcyBpcyB1bnNwZWNpZmllZCwgYnV0IGEgbmFtZSBtdXN0IGJlIHVuaXF1ZVxuICAgKiBhY3Jvc3MgdGhlIGxpc3Qgb2YgZXhwb3NlZCBmaWxlIHN5c3RlbXMuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGZpbGUgc3lzdGVtLlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJvb3Q6IERpcmVjdG9yeUVudHJ5O1xuXG4gIHRvSlNPTigpOiBzdHJpbmc7XG5cbiAgZW5jb2RlVVJJUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnkge1xuICAvKipcbiAgICogRW50cnkgaXMgYSBmaWxlLlxuICAgKi9cbiAgaXNGaWxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGRpcmVjdG9yeS5cbiAgICovXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXG4gICAqXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICAgKi9cbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZW50cnksIGV4Y2x1ZGluZyB0aGUgcGF0aCBsZWFkaW5nIHRvIGl0LlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSByb290IHRvIHRoZSBlbnRyeS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSBzeXN0ZW0gb24gd2hpY2ggdGhlIGVudHJ5IHJlc2lkZXMuXG4gICAqL1xuICBmaWxlc3lzdGVtOiBGaWxlU3lzdGVtO1xuICAvKipcbiAgICogYW4gYWx0ZXJuYXRlIFVSTCB3aGljaCBjYW4gYmUgdXNlZCBieSBuYXRpdmUgd2VidmlldyBjb250cm9scywgZm9yIGV4YW1wbGUgbWVkaWEgcGxheWVycy5cbiAgICovXG4gIG5hdGl2ZVVSTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPm1vdmUgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8dWw+XG4gICAqXG4gICAqIEEgbW92ZSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXG4gICAqL1xuICBtb3ZlVG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQ29weSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVsPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXRcbiAgICogZGlyZWN0b3J5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqXG4gICAqIERpcmVjdG9yeSBjb3BpZXMgYXJlIGFsd2F5cyByZWN1cnNpdmUtLXRoYXQgaXMsIHRoZXkgY29weSBhbGwgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICovXG4gIGNvcHlUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcbiAgICogZXhwaXJhdGlvbjsgYXMgaXQgZGVzY3JpYmVzIGEgbG9jYXRpb24gb24gZGlzaywgaXQgc2hvdWxkIGJlIHZhbGlkIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhhdCBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICB0b1VSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cbiAgICpcbiAgICogQHJldHVybnMgc3RyaW5nIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeVxuICAgKi9cbiAgdG9JbnRlcm5hbFVSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBmaWxlIG9yIGRpcmVjdG9yeS4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBkZWxldGUgYSBkaXJlY3RvcnkgdGhhdCBpcyBub3QgZW1wdHkuIEl0IGlzIGFuIGVycm9yIHRvXG4gICAqIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIHJlbW92ZShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIHRoZSBwYXJlbnQgRGlyZWN0b3J5RW50cnkgY29udGFpbmluZyB0aGlzIEVudHJ5LiBJZiB0aGlzIEVudHJ5IGlzIHRoZSByb290IG9mIGl0cyBmaWxlc3lzdGVtLCBpdHMgcGFyZW50XG4gICAqIGlzIGl0c2VsZi5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgcGFyZW50IEVudHJ5LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldFBhcmVudChzdWNjZXNzQ2FsbGJhY2s6IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRpcmVjdG9yeSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBEaXJlY3RvcnlSZWFkZXIgdG8gcmVhZCBFbnRyaWVzIGZyb20gdGhpcyBEaXJlY3RvcnkuXG4gICAqL1xuICBjcmVhdGVSZWFkZXIoKTogRGlyZWN0b3J5UmVhZGVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZmlsZS5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZmlsZSB0byBiZSBsb29rZWQgdXAgb3JcbiAgICogICBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGZpbGUgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqICAgICA8dWw+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSwgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgY3JlYXRlIGl0IGFzIGFcbiAgICogICB6ZXJvLWxlbmd0aCBmaWxlIGFuZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIEZpbGVFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZGlyZWN0b3J5LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgcmV0dXJuIGEgRmlsZUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRmlsZSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogRmxhZ3MsIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGRpcmVjdG9yeSB0byBiZSBsb29rZWQgdXBcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxuICAgKiAgIGEgY29ycmVzcG9uZGluZyBEaXJlY3RvcnlFbnRyeS48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IHJldHVybiBhIERpcmVjdG9yeUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxuICAgKiAgICAgPC91bD5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldERpcmVjdG9yeShcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZsYWdzLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxuICAgKiB0aGF0IGNvbnRhaW5zIGEgZmlsZSB0aGF0IGNhbm5vdCBiZSByZW1vdmVkXSwgc29tZSBvZiB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeSBtYXkgYmUgZGVsZXRlZC4gSXQgaXMgYW4gZXJyb3JcbiAgICogdG8gYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICpcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlUmVjdXJzaXZlbHkoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgbGV0cyBhIHVzZXIgbGlzdCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgaW4gYSBkaXJlY3RvcnkuIElmIHRoZXJlIGFyZSBubyBhZGRpdGlvbnMgdG8gb3JcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XG4gKiA8dWw+XG4gKiA8bGk+IEEgc2VyaWVzIG9mIGNhbGxzIHRvIHJlYWRFbnRyaWVzIG11c3QgcmV0dXJuIGVhY2ggZW50cnkgaW4gdGhlIGRpcmVjdG9yeSBleGFjdGx5IG9uY2UuPC9saT5cbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxuICogPGxpPiBUaGUgZW50cmllcyBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBpbmNsdWRlIHRoZSBkaXJlY3RvcnkgaXRzZWxmIFtcIi5cIl0gb3IgaXRzIHBhcmVudCBbXCIuLlwiXS48L2xpPlxuICogPC91bD5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlSZWFkZXIge1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGVyIHN1Y2Nlc3NmdWwgY2FsbCB0byByZWFkRW50cmllcyB0byBkZWxpdmVyIHRoZSBuZXh0IHByZXZpb3VzbHktdW5yZXBvcnRlZFxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xuICAgKiAgIG9mIHJlYWRFbnRyaWVzLCBzdWNjZXNzQ2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHplcm8tbGVuZ3RoIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIGluZGljYXRpbmcgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyBmcm9tIHRoZSBEaXJlY3RvcnkuXG4gICAqL1xuICByZWFkRW50cmllcyhzdWNjZXNzQ2FsbGJhY2s6IEVudHJpZXNDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBvbiBhIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSBleHRlbmRzIEVudHJ5IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgY3JlYXRlV3JpdGVyKHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBGaWxlLlxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGZpbGUoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcbn1cblxuLyoqXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVN5c3RlbUNhbGxiYWNrID0gKGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW0pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0b3J5RW50cnlDYWxsYmFjayA9IChlbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiByZWFkRW50cmllcygpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVXcml0ZXJDYWxsYmFjayA9IChmaWxlV3JpdGVyOiBGaWxlV3JpdGVyKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBvYnRhaW4gYSBGaWxlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxuICovXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yQ2FsbGJhY2sgPSAoZXJyOiBGaWxlRXJyb3IpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAvKipcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcbiAgICogaW1wbGVtZW50aW5nIHRoZSBXb3JrZXJVdGlscyBpbnRlcmZhY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcblxuICAvKipcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxuICAgKiA8b2w+XG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xuICAgKiBlbHNlLiA8L2xpPlxuICAgKiA8bGk+IFNldCByZWFkeVN0YXRlIHRvIERPTkUuIDwvbGk+XG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcbiAgICogdGFza3MuIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoZSB3cml0ZSBhbGdvcml0aG0gYmVpbmcgcHJvY2Vzc2VkLiA8L2xpPlxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxuICAgKiA8bGk+IEZpcmUgYSBwcm9ncmVzcyBldmVudCBjYWxsZWQgd3JpdGUgZW5kIDwvbGk+XG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxuICAgKiA8L29sPlxuICAgKi9cbiAgYWJvcnQoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBJTklUOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgb2JqZWN0IGhhcyBiZWVuIGNvbnN0cnVjdGVkLCBidXQgdGhlcmUgaXMgbm8gcGVuZGluZyB3cml0ZS5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBXUklUSU5HOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXG4gICAqIGFib3J0KCkuIFRoZSBGaWxlU2F2ZXIgaXMgbm8gbG9uZ2VyIHdyaXRpbmcgdGhlIGJsb2IuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgRE9ORTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSwgd2hpY2ggbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPklOSVQ8L2xpPlxuICAgKiA8bGk+V1JJVElORzwvbGk+XG4gICAqIDxsaT5ET05FPC9saT5cbiAgICogPHVsPlxuICAgKlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBlcnJvcjogRXJyb3I7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBzdGFydCBldmVudHNcbiAgICovXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxuICAgKi9cbiAgb25wcm9ncmVzczogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZTogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgYWJvcnQgZXZlbnRzLlxuICAgKi9cbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3IgZXJyb3IgZXZlbnRzLlxuICAgKi9cbiAgb25lcnJvcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICAvKipcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cbiAgICovXG4gIG9ud3JpdGVlbmQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBUaGlzIGludGVyZmFjZSBleHBhbmRzIG9uIHRoZSBGaWxlU2F2ZXIgaW50ZXJmYWNlIHRvIGFsbG93IGZvciBtdWx0aXBsZSB3cml0ZSBhY3Rpb25zLCByYXRoZXIgdGhhbiBqdXN0IHNhdmluZyBhXG4gKiAgIHNpbmdsZSBCbG9iLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlV3JpdGVyIGV4dGVuZHMgRmlsZVNhdmVyIHtcbiAgLyoqXG4gICAqIFRoZSBieXRlIG9mZnNldCBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB0byB0aGUgZmlsZSB3aWxsIG9jY3VyLiBUaGlzIG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuIGxlbmd0aC5cbiAgICogQSBuZXdseS1jcmVhdGVkIEZpbGVXcml0ZXIgbXVzdCBoYXZlIHBvc2l0aW9uIHNldCB0byAwLlxuICAgKi9cbiAgcG9zaXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgZmlsZS4gSWYgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSByZWFkIGFjY2VzcyB0byB0aGUgZmlsZSwgdGhpcyBtdXN0IGJlIHRoZSBoaWdoZXN0IGJ5dGUgb2Zmc2V0IGF0XG4gICAqIHdoaWNoIHRoZSB1c2VyIGhhcyB3cml0dGVuLlxuICAgKi9cbiAgbGVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdyaXRlIHRoZSBzdXBwbGllZCBkYXRhIHRvIHRoZSBmaWxlIGF0IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgYmxvYiB0byB3cml0ZS5cbiAgICovXG4gIHdyaXRlKGRhdGE6IEFycmF5QnVmZmVyIHwgQmxvYiB8IHN0cmluZyk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFNlZWsgc2V0cyB0aGUgZmlsZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB3aWxsIG9jY3VyLlxuICAgKlxuICAgKiBAcGFyYW0gb2Zmc2V0IElmIG5vbm5lZ2F0aXZlLCBhbiBhYnNvbHV0ZSBieXRlIG9mZnNldCBpbnRvIHRoZSBmaWxlLiBJZiBuZWdhdGl2ZSwgYW4gb2Zmc2V0IGJhY2sgZnJvbSB0aGUgZW5kIG9mXG4gICAqICAgdGhlIGZpbGUuXG4gICAqL1xuICBzZWVrKG9mZnNldDogbnVtYmVyKTogdm9pZDtcblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIHRvIHRoYXQgc3BlY2lmaWVkLiBJZiBzaG9ydGVuaW5nIHRoZSBmaWxlLCBkYXRhIGJleW9uZCB0aGUgbmV3IGxlbmd0aCBtdXN0IGJlXG4gICAqIGRpc2NhcmRlZC4gSWYgZXh0ZW5kaW5nIHRoZSBmaWxlLCB0aGUgZXhpc3RpbmcgZGF0YSBtdXN0IGJlIHplcm8tcGFkZGVkIHVwIHRvIHRoZSBuZXcgbGVuZ3RoLlxuICAgKlxuICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSB0byB3aGljaCB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIGlzIHRvIGJlIGFkanVzdGVkLCBtZWFzdXJlZCBpbiBieXRlcy5cbiAgICovXG4gIHRydW5jYXRlKHNpemU6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdyaXRlT3B0aW9ucyB7XG4gIHJlcGxhY2U/OiBib29sZWFuO1xuICBhcHBlbmQ/OiBib29sZWFuO1xuICB0cnVuY2F0ZT86IG51bWJlcjsgLy8gaWYgcHJlc2VudCwgbnVtYmVyIG9mIGJ5dGVzIHRvIHRydW5jYXRlIGZpbGUgdG8gYmVmb3JlIHdyaXRpbmdcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVFcnJvciB7XG4gIHN0YXRpYyBOT1RfRk9VTkRfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBTRUNVUklUWV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIEFCT1JUX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgTk9UX1JFQURBQkxFX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgRU5DT0RJTkdfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIElOVkFMSURfU1RBVEVfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBTWU5UQVhfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBJTlZBTElEX01PRElGSUNBVElPTl9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFFVT1RBX0VYQ0VFREVEX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgVFlQRV9NSVNNQVRDSF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFBBVEhfRVhJU1RTX0VSUjogbnVtYmVyO1xuICAvKiogRXJyb3IgY29kZSAqL1xuICBjb2RlOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2RlOiBudW1iZXIpO1xufVxuXG4vKiogQGhpZGRlbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVJlYWRlciB7XG4gIHN0YXRpYyBFTVBUWTogbnVtYmVyO1xuICBzdGF0aWMgTE9BRElORzogbnVtYmVyO1xuICBzdGF0aWMgRE9ORTogbnVtYmVyO1xuICBzdGF0aWMgUkVBRF9DSFVOS19TSVpFOiBudW1iZXI7XG5cbiAgcmVhZHlTdGF0ZTogbnVtYmVyOyAvLyBzZWUgY29uc3RhbnRzIGluIHZhciBkZWNsYXJhdGlvbiBiZWxvd1xuICBlcnJvcjogRXJyb3I7XG4gIHJlc3VsdDogc3RyaW5nIHwgQXJyYXlCdWZmZXI7IC8vIHR5cGUgZGVwZW5kcyBvbiByZWFkQXNYWFgoKSBjYWxsIHR5cGVcblxuICBvbmxvYWRzdGFydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25wcm9ncmVzczogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25sb2FkOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmVycm9yOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmxvYWRlbmQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9uYWJvcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG5cbiAgYWJvcnQoKTogdm9pZDtcblxuICByZWFkQXNUZXh0KGZlOiBJRmlsZSwgZW5jb2Rpbmc/OiBzdHJpbmcpOiB2b2lkO1xuXG4gIHJlYWRBc0RhdGFVUkwoZmU6IElGaWxlKTogdm9pZDtcblxuICByZWFkQXNCaW5hcnlTdHJpbmcoZmU6IElGaWxlKTogdm9pZDtcblxuICByZWFkQXNBcnJheUJ1ZmZlcihmZTogSUZpbGUpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbnR5cGUgV2luZG93ID0gTG9jYWxGaWxlU3lzdGVtO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xuXG4vKipcbiAqIEBuYW1lIEZpbGVcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaW1wbGVtZW50cyBhIEZpbGUgQVBJIGFsbG93aW5nIHJlYWQvd3JpdGUgYWNjZXNzIHRvIGZpbGVzIHJlc2lkaW5nIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogVGhlIEZpbGUgY2xhc3MgaW1wbGVtZW50cyBzdGF0aWMgY29udmVuaWVuY2UgZnVuY3Rpb25zIHRvIGFjY2VzcyBmaWxlcyBhbmQgZGlyZWN0b3JpZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGUuY2hlY2tEaXIodGhpcy5maWxlLmRhdGFEaXJlY3RvcnksICdteWRpcicpLnRoZW4oXyA9PiBjb25zb2xlLmxvZygnRGlyZWN0b3J5IGV4aXN0cycpKS5jYXRjaChlcnIgPT5cbiAqICAgY29uc29sZS5sb2coJ0RpcmVjdG9yeSBkb2Vzbid0IGV4aXN0JykpO1xuICpcbiAqIGBgYFxuICpcbiAqICBUaGlzIHBsdWdpbiBpcyBiYXNlZCBvbiBzZXZlcmFsIHNwZWNzLCBpbmNsdWRpbmcgOiBUaGUgSFRNTDUgRmlsZSBBUEkgaHR0cDogLy93d3cudzMub3JnL1RSL0ZpbGVBUEkvXG4gKiAgVGhlIChub3ctZGVmdW5jdCkgRGlyZWN0b3JpZXMgYW5kIFN5c3RlbSBleHRlbnNpb25zIExhdGVzdDogaHR0cDogLy93d3cudzMub3JnL1RSLzIwMTIvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTIwNDE3L1xuICogIEFsdGhvdWdoIG1vc3Qgb2YgdGhlIHBsdWdpbiBjb2RlIHdhcyB3cml0dGVuIHdoZW4gYW4gZWFybGllciBzcGVjIHdhcyBjdXJyZW50OiBodHRwOlxuICogICAvL3d3dy53My5vcmcvVFIvMjAxMS9XRC1maWxlLXN5c3RlbS1hcGktMjAxMTA0MTkvIEl0IGFsc28gaW1wbGVtZW50cyB0aGUgRmlsZVdyaXRlciBzcGVjIDogaHR0cDpcbiAqICAgLy9kZXYudzMub3JnLzIwMDkvZGFwL2ZpbGUtc3lzdGVtL2ZpbGUtd3JpdGVyLmh0bWxcbiAqICBAaW50ZXJmYWNlc1xuICogIElGaWxlXG4gKiAgRW50cnlcbiAqICBEaXJlY3RvcnlFbnRyeVxuICogIERpcmVjdG9yeVJlYWRlclxuICogIEZpbGVTeXN0ZW1cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZmlsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhY2hlZCBmaWxlcyB0aGF0IHNob3VsZCBzdXJ2aXZlIGFwcCByZXN0YXJ0cy5cbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGNhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBzcGFjZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxDYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgZXh0ZXJuYWwgc3RvcmFnZSAoU0QgY2FyZCkgcm9vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHN5bmNlZERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBGaWxlcyBwcml2YXRlIHRvIHRoZSBhcHAsIGJ1dCB0aGF0IGFyZSBtZWFuaW5nZnVsIHRvIG90aGVyIGFwcGxpY2F0aW9ucyAoZS5nLiBPZmZpY2UgZmlsZXMpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgY29yZG92YUZpbGVFcnJvcjogYW55ID0ge1xuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcbiAgICAzOiAnQUJPUlRfRVJSJyxcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXG4gICAgNjogJ05PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUicsXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcbiAgICA4OiAnU1lOVEFYX0VSUicsXG4gICAgOTogJ0lOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUicsXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxuICAgIDEyOiAnUEFUSF9FWElTVFNfRVJSJyxcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxuICAgIDE0OiAnRElSX1JFQURfRVJSJyxcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbWFpbmluZyBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGcmVlRGlza1NwYWNlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb3Jkb3ZhLmV4ZWMocmVzb2x2ZSBhcyAoZGF0YTogYW55KSA9PiBhbnksIHJlamVjdCBhcyAoZGF0YTogYW55KSA9PiBhbnksICdGaWxlJywgJ2dldEZyZWVEaXNrU3BhY2UnLCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBkaXJlY3RvcnkgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGRpcmVjdG9yeSBleGlzdHMgb3IgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2tEaXIocGF0aDogc3RyaW5nLCBkaXI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXIpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGggKyBkaXI7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChmdWxsUGF0aCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGRpcmVjdG9yeSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBkaXJlY3RvcnkgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgRGlyZWN0b3J5RW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgZGlyZWN0b3J5IGF0IGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChmc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzb3VyY2UgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggVGhlIGRlc3RpbmF0aW9uIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeSB8IEVudHJ5PiB7XG4gICAgbmV3RGlyTmFtZSA9IG5ld0Rpck5hbWUgfHwgZGlyTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHNyY2RlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbigoZGVzdGVuYXRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2RlLCBkZXN0ZW5hdGlvbiwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSBhIGRpcmVjdG9yeSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBOZXcgbmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNvcHlEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHNyY2RlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbigoZGVzdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2RlLCBkZXN0ZSwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBmaWxlcyBhbmQgZGlyZWN0b3J5IGZyb20gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIEVudHJ5IG9iamVjdHMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGxpc3REaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5W10+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RW50cnlbXT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHtcbiAgICAgICAgICBjcmVhdGU6IGZhbHNlLFxuICAgICAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZEVudHJpZXMocmVhZGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZW1vdmVSZWN1cnNpdmVseShwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmltcmFmKGRlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgZmlsZSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSB0byBjaGVja1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2tGaWxlKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChwYXRoICsgZmlsZSkudGhlbigoZnNlKSA9PiB7XG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBmaWxlJztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBmaWxlIGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKChmc2UpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbGUgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byByZW1vdmVcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChmc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGZlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShmZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyBmaWxlIHRvIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IGNvbnRlbnQsIGJsb2Igb3IgQXJyYXlCdWZmZXIgdG8gd3JpdGVcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSB3aGV0aGVyIHRvIHJlcGxhY2UvYXBwZW5kIHRvIGFuIGV4aXN0aW5nIGZpbGUuIFNlZSBJV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgd3JpdGVGaWxlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcixcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmlsZU9wdHM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiAhb3B0aW9ucy5hcHBlbmQsXG4gICAgICBleGNsdXNpdmU6ICFvcHRpb25zLnJlcGxhY2UsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGNvbnRlbnQgdG8gRmlsZUVudHJ5LlxuICAgKlxuICAgKiBAaGlkZGVuXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IG9wdGlvbnMgcmVwbGFjZSBmaWxlIGlmIHNldCB0byB0cnVlLiBTZWUgV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZUZpbGVFbnRyeShmZTogRmlsZUVudHJ5LCB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVXcml0ZXIoZmUpXG4gICAgICAudGhlbigod3JpdGVyKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xuICAgICAgICAgIHdyaXRlci5zZWVrKHdyaXRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHJ1bmNhdGUpIHtcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYn0gdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRXhpc3RpbmdGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nIHwgQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLndyaXRlRmlsZShwYXRoLCBmaWxlTmFtZSwgdGV4dCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZSBhcyB0ZXh0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyBvciByZWplY3RzIHdpdGhcbiAgICogICBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNUZXh0KHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdUZXh0Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJhc2U2NCBlbmNvZGVkIGRhdGEgdXJsLlxuICAgKiBBIGRhdGEgdXJsIGlzIG9mIHRoZSBmb3JtOlxuICAgKiAgICAgIGRhdGE6IFs8bWVkaWF0eXBlPl1bO2Jhc2U2NF0sPGRhdGE+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgZGF0YSBVUkwgb3IgcmVqZWN0c1xuICAgKiAgIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzRGF0YVVSTChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnRGF0YVVSTCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiaW5hcnkgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdCaW5hcnlTdHJpbmcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGFuIEFycmF5QnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgQXJyYXlCdWZmZXIgb3JcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8QXJyYXlCdWZmZXI+KHBhdGgsIGZpbGUsICdBcnJheUJ1ZmZlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBmaWxlIHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gbW92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIG1vdmUgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbigoZnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChzcmNmZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oKGRlc3RlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZmlsZSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGZpbGUgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoc3JjZmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGVyclxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGZpbGxFcnJvck1lc3NhZ2UoZXJyOiBGaWxlRXJyb3IpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgZXJyLm1lc3NhZ2UgPSB0aGlzLmNvcmRvdmFGaWxlRXJyb3JbZXJyLmNvZGVdO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBmaWxlIHN5c3RlbSBVUkxcbiAgICpcbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gZmlsZSBzeXN0ZW0gdXJsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGZpbGVVcmw6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoXG4gICAgICAgICAgZmlsZVVybCxcbiAgICAgICAgICAoZW50cnk6IEVudHJ5KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGVudHJ5KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdG9yeVVybCB7c3RyaW5nfSBkaXJlY3Rvcnkgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZURpcmVjdG9yeVVybChkaXJlY3RvcnlVcmw6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbigoZGUpID0+IHtcbiAgICAgIGlmIChkZS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZGUgYXMgRGlyZWN0b3J5RW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDEzKTtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZGlyZWN0b3J5JztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PERpcmVjdG9yeUVudHJ5PihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRpcmVjdG9yeVxuICAgKlxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlOYW1lIHtzdHJpbmd9IERpcmVjdG9yeSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldERpcmVjdG9yeShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGRpcmVjdG9yeU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgKGRlKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGRlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoeGMpIHtcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcbiAgICAgICAgcmVqZWN0KHhjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBmaWxlXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcbiAgICogQHBhcmFtIGZpbGVOYW1lIHtzdHJpbmd9IEZpbGUgbmFtZVxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZ2V0RmlsZShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGZpbGVOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RmlsZUVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RmlsZShmaWxlTmFtZSwgZmxhZ3MsIHJlc29sdmUsIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkRmlsZTxUPihcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZTogc3RyaW5nLFxuICAgIHJlYWRBczogJ0FycmF5QnVmZmVyJyB8ICdCaW5hcnlTdHJpbmcnIHwgJ0RhdGFVUkwnIHwgJ1RleHQnXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBhbnkgYXMgVCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWRlci5lcnJvciAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh7IGNvZGU6IG51bGwsIG1lc3NhZ2U6ICdSRUFERVJfT05MT0FERU5EX0VSUicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxuICAgICAgICAgICAgKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgcmVhZGVyW2ByZWFkQXMke3JlYWRBc31gXS5jYWxsKHJlYWRlciwgZmlsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gZmVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmUoZmU6IEVudHJ5KTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZS5yZW1vdmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGZlIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNyY2VcbiAgICogQHBhcmFtIGRlc3RkaXJcbiAgICogQHBhcmFtIG5ld05hbWVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlKHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3JjZS5tb3ZlVG8oXG4gICAgICAgIGRlc3RkaXIsXG4gICAgICAgIG5ld05hbWUsXG4gICAgICAgIChkZXN0ZSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHNyY2VcbiAgICogQHBhcmFtIGRlc3RkaXJcbiAgICogQHBhcmFtIG5ld05hbWVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBjb3B5KHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc3JjZS5jb3B5VG8oXG4gICAgICAgIGRlc3RkaXIsXG4gICAgICAgIG5ld05hbWUsXG4gICAgICAgIChkZXN0ZSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGRyXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVhZEVudHJpZXMoZHI6IERpcmVjdG9yeVJlYWRlcik6IFByb21pc2U8RW50cnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBkci5yZWFkRW50cmllcyhcbiAgICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGVudHJpZXMpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGRlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGUucmVtb3ZlUmVjdXJzaXZlbHkoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGZlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlV3JpdGVyKGZlOiBGaWxlRW50cnkpOiBQcm9taXNlPEZpbGVXcml0ZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUuY3JlYXRlV3JpdGVyKFxuICAgICAgICAod3JpdGVyKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh3cml0ZXIpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHdyaXRlclxuICAgKiBAcGFyYW0gZ3VcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSB3cml0ZSh3cml0ZXI6IEZpbGVXcml0ZXIsIGd1OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChndSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUluQ2h1bmtzKHdyaXRlciwgZ3UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbndyaXRlZW5kID0gKGV2dCkgPT4ge1xuICAgICAgICBpZiAod3JpdGVyLmVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShldnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3JpdGVyLndyaXRlKGd1KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gd3JpdGVyXG4gICAqIEBwYXJhbSBmaWxlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgd3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyOiBGaWxlV3JpdGVyLCBmaWxlOiBCbG9iKSB7XG4gICAgY29uc3QgQkxPQ0tfU0laRSA9IDEwMjQgKiAxMDI0O1xuICAgIGxldCB3cml0dGVuU2l6ZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyaXRlTmV4dENodW5rKCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKEJMT0NLX1NJWkUsIGZpbGUuc2l6ZSAtIHdyaXR0ZW5TaXplKTtcbiAgICAgIGNvbnN0IGNodW5rID0gZmlsZS5zbGljZSh3cml0dGVuU2l6ZSwgd3JpdHRlblNpemUgKyBzaXplKTtcblxuICAgICAgd3JpdHRlblNpemUgKz0gc2l6ZTtcbiAgICAgIHdyaXRlci53cml0ZShjaHVuayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0ZXIub25lcnJvciA9IHJlamVjdCBhcyAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gICAgICB3cml0ZXIub253cml0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdyaXR0ZW5TaXplIDwgZmlsZS5zaXplKSB7XG4gICAgICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=