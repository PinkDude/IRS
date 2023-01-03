using AutoMapper;
using IRS.Contracts.Texts;
using IRS.Domain.ReversWords.Models;

namespace IRS.WebApp.Mappings;

public class TextProfile : Profile
{
    public TextProfile()
    {
        CreateMap<TextEntity, TextsDto>();
        CreateMap<CreateTexts, TextEntity>();
    }
}