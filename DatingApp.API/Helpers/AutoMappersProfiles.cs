using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMappersProfiles : Profile
    {
        public AutoMappersProfiles()
        {
            CreateMap<User, UserForListDto>()
            .ForMember(dest =>  dest.PhotoURL, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p=> p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOFBirth.CalculateAge()));
            CreateMap<User, UserForDetailedDto>()
            .ForMember(dest =>  dest.PhotoURL, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p=> p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOFBirth.CalculateAge()));
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}