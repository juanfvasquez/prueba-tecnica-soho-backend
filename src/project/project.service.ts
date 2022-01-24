import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectDto } from './project.dto';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  /**
   * findAll - Returns all projects
   * @returns All projects
   */
  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  /**
   * findByPage - Returns projects by page
   * @param limit Number of projects to return
   * @param offset Offset of the first project to return
   * @returns Projects by page
   */
  findByPage(limit: number, offset: number): Promise<Project[]> {
    return this.projectRepository.find({
      skip: offset,
      take: limit,
    });
  }

  /**
   * create - Creates a new project after validating it
   * @param project Project to create
   * @returns The created project
   */
  create(project: ProjectDto): Promise<Project> {
    this._validate(project);
    return this.projectRepository.save(project);
  }

  /**
   * _validate: Validates the project info
   * @param project Project to validate
   */
  _validate(project: ProjectDto): void {
    if (!project.name) {
      throw new Error('Project name is required.');
    }
  }
}
