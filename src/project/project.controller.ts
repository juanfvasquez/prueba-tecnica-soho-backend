import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/exception-filter/exception.filter';
import { PaginationRequest } from 'src/pagination/pagination.dto';
import { ProjectDto } from './project.dto';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Controller('projects')
@UseFilters(AllExceptionsFilter)
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get('pages')
  findByPage(@Query() query: PaginationRequest): Promise<Project[]> {
    const { limit, offset } = query;
    return this.projectService.findByPage(limit, offset);
  }

  @Post()
  create(@Body() project: ProjectDto): Promise<Project> {
    return this.projectService.create(project);
  }
}
