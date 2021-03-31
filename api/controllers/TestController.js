/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  test: (req, res) => {
    return res.ok({
      success: true,
      message: 'test oke'
    });
  },
  upload: (req, res) => {
    req.file('avatar').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images'),
    },async (err, uploadedFiles) => {
      if (err) { return res.serverError(err); }
      if (uploadedFiles && uploadedFiles.length === 0) { return res.ok({ message: 'upload failed', success: true }); }

      const baseUrl = sails.config.custom.baseUrl;

      console.log('ssssss', require('util').format('%s/user/avatar/%s', baseUrl, req.query), uploadedFiles);

      await Users.update(req.query, {

        // Generate a unique URL where the avatar can be downloaded.
        avatarUrl: require('util').format('%s/user/avatar/%s', baseUrl, req.query),

        // Grab the first file and use it's `fd` (file descriptor)
        avatarFd: uploadedFiles[0].fd
      });
      console.log('uploadedFiles', uploadedFiles);
      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!',
        files: uploadedFiles
      });
    });
  },

  avatar: function (req, res){

    Users.findOne(req.query).exec((err, user) => {
      if (err) {return res.serverError(err);}
      if (!user) {return res.notFound();}

      // User has no avatar image uploaded.
      // (should have never have hit this endpoint and used the default image)
      if (!user.avatarFd) {
        return res.notFound();
      }

      var SkipperDisk = require('skipper-disk');
      var fileAdapter = SkipperDisk(/* optional opts */);

      // set the filename to the same file as the user uploaded
      res.set('Content-disposition', 'attachment; filename=\'' + file.name + '\'');

      // Stream the file down
      fileAdapter.read(user.avatarFd)
    .on('error', (err) => {
      return res.serverError(err);
    })
    .pipe(res);
    });
  }


};

