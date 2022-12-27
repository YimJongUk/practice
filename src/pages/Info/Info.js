import { Grid, Tooltip, Typography } from "@mui/material";
import Label from "./components/Label";
import { getArmorProfiles } from "../../apis";
import { useQuery } from "@tanstack/react-query";

const Info = () => {
  const { data } = useQuery(["Profiles"], () => getArmorProfiles("수념s"));

  return (
    <>
      <Grid container sx={{ width: "500px" }}>
        <Grid item xs={12}>
          <Label label={"직업"} contents={data.CharacterClassName} />
          <Label label={"캐릭터레벨"} contents={data.CharacterLevel} />
          <Label label={"캐릭터이름"} contents={data.CharacterName} />
          <Label label={"칭호"} contents={data.Title} />
          <Label label={"원정대레벨"} contents={data.ExpeditionLevel} />
          <Label label={"길드명"} contents={data.GuildName} />
          <Label label={"길드등급"} contents={data.GuildMemberGrade} />
          <Label label={"영지"} contents={data.TownName} />
          <Label label={"영지레벨"} contents={data.TownLevel} />
          <Label label={"아이템레벨(평균)"} contents={data.ItemAvgLevel} />
          <Label label={"아이템레벨(최고)"} contents={data.ItemMaxLevel} />
          <Label label={"PVP등급"} contents={data.PvpGradeName} />
          <Label label={"서버명"} contents={data.ServerName} />

          <Grid container>
            <Grid item xs={2}>
              스탯
            </Grid>
            <Grid item xs={6}>
              {data.Stats.map((el, idx) => (
                <Tooltip
                  key={idx}
                  title={
                    <>
                      {el.Tooltip.map((dom, idxKey) => (
                        <Grid
                          key={el.Type + idxKey}
                          dangerouslySetInnerHTML={{ __html: dom }}
                        />
                      ))}
                    </>
                  }
                  placement="right"
                >
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography>{el.Type}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{el.Value}</Typography>
                    </Grid>
                  </Grid>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/* <div>
            {data.Tendencies.map((el, idx) => (
              <div key={el.Type + idx}>
                {el.Type} : {el.Point}
              </div>
            ))}
          </div> */}
      </Grid>
    </>
  );
};

export default Info;
