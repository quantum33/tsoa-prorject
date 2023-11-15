import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { User } from "./user";
import { UsersService } from "./usersService";

@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
        @Path() userId: number,
        @Query() name?: string
        )
        : Promise<User> {
            return new UsersService().get(userId, name);
        }
}