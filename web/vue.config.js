module.exports = {
  // 開発環境ではファイル保存時に自動で更新する
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    watchOptions: {
      poll: 3000
    }
  }
}