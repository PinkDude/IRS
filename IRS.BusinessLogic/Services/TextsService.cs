using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRS.Domain.Abstractions;
using IRS.Domain.Abstractions.Database;
using IRS.Domain.ReversWords.Exceptions;
using IRS.Domain.ReversWords.Models;
using Microsoft.EntityFrameworkCore;

namespace IRS.BusinessLogic.Services
{
    public class TextsService : ITextsService
    {
        private readonly IUnitOfWork _uow;

        public TextsService(IUnitOfWork uow)
        {
            _uow = uow;
        }
        
        public async Task<IReadOnlyCollection<TextEntity>> GetList(int skip, int take, bool isShorthand)
        {
            var entities = await _uow.Texts.GetQuery()
                .Where(e => e.IsShorthand == isShorthand)
                .OrderBy(e => e.Created)
                .Skip(skip)
                .Take(take)
                .ToListAsync();

            return entities;
        }

        public async Task Create(TextEntity entity)
        {
            entity.Created = DateTime.Now;

            await _uow.Texts.Create(entity);
        }

        public async Task Remove(Guid id)
        {
            var entity = await _uow.Texts.GetQuery().FirstOrDefaultAsync(e => e.Id == id);
            if (entity is null)
                throw new TextsException("Не удалось найти!");

            await _uow.Texts.Remove(entity);
        }

        public async Task<TextEntity> GetRandomReversWords(Guid? exclusionId)
        {
            var count = await _uow.Texts.GetQuery().CountAsync();
            if (exclusionId.HasValue)
                count--;
            
            var random = new Random();
            var randomSkip = random.Next(0, count);

            var entity = await _uow.Texts.GetQuery()
                .Where(e => e.Id != exclusionId)
                .OrderBy(e => e.Created)
                .Skip(randomSkip)
                .Take(1)
                .FirstOrDefaultAsync();

            return entity;
        }
        
        public async Task<TextEntity> GetRandomShorthand(Guid? exclusionId)
        {
            var count = await _uow.Texts.GetQuery().Where(e => e.IsShorthand).CountAsync();
            if (exclusionId.HasValue)
                count--;
            
            var random = new Random();
            var randomSkip = random.Next(0, count);

            var entity = await _uow.Texts.GetQuery()
                .Where(e => e.Id != exclusionId && e.IsShorthand)
                .OrderBy(e => e.Created)
                .Skip(randomSkip)
                .Take(1)
                .FirstOrDefaultAsync();

            return entity;
        }
    }
}