import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Role } from 'src/auth/roles/role.enum';
import { Roles } from 'src/auth/roles/role.decorator';

@ApiBearerAuth('jwt')
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly user: UsersService) {}

  @ApiOkResponse({
    type: UserDto,
  })
  @Get(':id')
  async get(@Param('id', ParseUUIDPipe) id: string) {
    return this.user.user({ id });
  }

  @ApiOkResponse({
    type: UserDto,
  })
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @Post(':userId/awards/:awardId')
  async giveAward(
    @Param('userId', ParseUUIDPipe) userId: string,
    @Param('awardId', ParseUUIDPipe) awardId: string,
  ) {
    return this.user.giveAward({ userId, awardId });
  }
}
