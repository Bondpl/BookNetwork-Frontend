/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserImport } from './routes/user'
import { Route as LoginImport } from './routes/login'
import { Route as BorrowImport } from './routes/borrow'
import { Route as BooksImport } from './routes/books'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UserRoute = UserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const BorrowRoute = BorrowImport.update({
  id: '/borrow',
  path: '/borrow',
  getParentRoute: () => rootRoute,
} as any)

const BooksRoute = BooksImport.update({
  id: '/books',
  path: '/books',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/books': {
      id: '/books'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof BooksImport
      parentRoute: typeof rootRoute
    }
    '/borrow': {
      id: '/borrow'
      path: '/borrow'
      fullPath: '/borrow'
      preLoaderRoute: typeof BorrowImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/books': typeof BooksRoute
  '/borrow': typeof BorrowRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/books': typeof BooksRoute
  '/borrow': typeof BorrowRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/books': typeof BooksRoute
  '/borrow': typeof BorrowRoute
  '/login': typeof LoginRoute
  '/user': typeof UserRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/books' | '/borrow' | '/login' | '/user'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/books' | '/borrow' | '/login' | '/user'
  id: '__root__' | '/' | '/about' | '/books' | '/borrow' | '/login' | '/user'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BooksRoute: typeof BooksRoute
  BorrowRoute: typeof BorrowRoute
  LoginRoute: typeof LoginRoute
  UserRoute: typeof UserRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BooksRoute: BooksRoute,
  BorrowRoute: BorrowRoute,
  LoginRoute: LoginRoute,
  UserRoute: UserRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/books",
        "/borrow",
        "/login",
        "/user"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/books": {
      "filePath": "books.jsx"
    },
    "/borrow": {
      "filePath": "borrow.jsx"
    },
    "/login": {
      "filePath": "login.jsx"
    },
    "/user": {
      "filePath": "user.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
