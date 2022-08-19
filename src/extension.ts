// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

import completionAt from './completionAt'
import setLocations from './setLocations'
import completionEq from './completionEq'
import hover from './hover'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  completionAt(context) // 自动补全@
  setLocations(context) // 设置路径的webview
  hover(context)
  completionEq(context) // 自动补全 =

  let disposable = vscode.commands.registerCommand('chris_test', () => {
    vscode.window.showInformationMessage('Hello World from lessVar_chris!')
  })
  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
