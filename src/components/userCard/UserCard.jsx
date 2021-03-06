import React from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { PhoneCall, At } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    cursor: "pointer",
    padding: 5,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function UserCard(props) {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <Group noWrap>
        <Avatar src={props.image} size={94} />
        <div>
          <Text
            size="xs"
            sx={{ textTransform: "uppercase" }}
            weight={700}
            color="dimmed"
          >
            {props.role} {props.role === "driver" && `- ${props.driverStatus}`}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {props.name.length > 13
              ? props.name.slice(0, 10) + "..."
              : props.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {props.email.length > 14
                ? props.email.slice(0, 14) + "..."
                : props.email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {props.phone.length > 14
                ? props.phone.slice(0, 12) + "..."
                : props.phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default UserCard;
