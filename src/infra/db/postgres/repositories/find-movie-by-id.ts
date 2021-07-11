import { FindMovieByIdRepository } from '@/data/contracts'
import { MovieModel } from '@/data/models'
import { PostgresMoviesEntity } from '@/infra/db/entities'
import { getManager } from 'typeorm'

export class PostgresMoviesRepository implements FindMovieByIdRepository {
  async findById(movieId: string): Promise<MovieModel> {
    const repository = getManager().getRepository(PostgresMoviesEntity)
    const movie = await repository.findOne({ where: { id_imdb: movieId } })

    return {
      genre: [movie.name],
      name: movie.name,
      poster: movie.name,
      releaseDate: new Date(),
      sinopsis: movie.description,
    }
  }
}
