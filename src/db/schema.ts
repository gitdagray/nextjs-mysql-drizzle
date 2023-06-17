import { mysqlTable, mysqlSchema, AnyMySqlColumn, uniqueIndex, int, varchar, index } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
    id: int("id").autoincrement().primaryKey().notNull(),
    author: varchar("author", { length: 255 }).notNull(),
},
    (table) => {
        return {
            author: uniqueIndex("author").on(table.author),
        }
    });

export const categories = mysqlTable("categories", {
    id: int("id").autoincrement().primaryKey().notNull(),
    category: varchar("category", { length: 255 }).notNull(),
},
    (table) => {
        return {
            category: uniqueIndex("category").on(table.category),
        }
    });

export const quotes = mysqlTable("quotes", {
    id: int("id").autoincrement().primaryKey().notNull(),
    quote: varchar("quote", { length: 255 }).notNull(),
    authorId: int("author_id").notNull(),
    categoryId: int("category_id").notNull(),
},
    (table) => {
        return {
            quote: uniqueIndex("quote").on(table.quote),
            authorIdIdx: index("author_id_idx").on(table.authorId),
            categoryIdIdx: index("category_id_idx").on(table.categoryId),
        }
    });