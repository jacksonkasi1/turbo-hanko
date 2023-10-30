import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { todoInputSchema } from "../types";

export const todoRouter = router({
  all: publicProcedure.query( ({  }) => {
    // const todos =  ctx.prisma.todo.findMany({});

    // console.log({todos});
    
    return [{
        id: 1,
        text: "Todo 1",
        done: false,
      }
    ];
  }),
  createTodo: protectedProcedure
    .input(todoInputSchema)
    .mutation(async ({ ctx, input }) => {
       await ctx.prisma.todo.create({
        data: {
          text: input.text,
          done: false,
        },
      });
    }),

  deleteTodo: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),

  toggleTodo: protectedProcedure
    .input(z.object({ id: z.number(), done: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          done: !input.done,
        },
      });
    }),
});
