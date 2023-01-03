using AutoMapper;
using IRS.Contracts.Texts;
using IRS.Domain.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IRS.WebApp.Controllers;

[Route("api/[controller]")]
public class TextsController : ControllerBase
{
    private readonly ITextsService _service;
    private readonly IMapper _mapper;

    public TextsController(
        ITextsService service,
        IMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    [HttpGet("random/revers-word")]
    public async Task<IActionResult> GetRandomReversWords([FromQuery] Guid? exclusionId)
    {
        var result = await _service.GetRandomReversWords(exclusionId);
        var mapped = _mapper.Map<TextsDto>(result);
        return Ok(mapped);
    }
    
    [HttpGet("random/shorthand")]
    public async Task<IActionResult> GetRandomShorthand([FromQuery] Guid? exclusionId)
    {
        var result = await _service.GetRandomShorthand(exclusionId);
        var mapped = _mapper.Map<TextsDto>(result);
        return Ok(mapped);
    }
}