import React from "react";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ScrollArea,
  createStyles,
} from "@mantine/core";
import image from "../../assets/box.png";

const useStyles = createStyles((theme) => ({
  orderButton: {
    cursor: "pointer",
  },
}));

function AdminOrderList(props) {
  const { classes } = useStyles();

  const data = [
    {
      image,
      name: "kostumer",
      email: "ini@gmail.com",
      from: "asal, Jawa",
      destination: "Madura",
      vehicleType: "Pick up",
      status: "Pengajuan",
    },
    {
      image,
      name: "kostumer",
      email: "ini@gmail.com",
      from: "asal, Jawa",
      destination: "Madura",
      vehicleType: "Pick up",
      status: "Pengajuan",
    },
    {
      image,
      name: "kostumer",
      email: "ini@gmail.com",
      from: "asal, Jawa",
      destination: "Madura",
      vehicleType: "Pick up",
      status: "Penyesuaian",
    },
  ];

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group
          spacing="sm"
          onClick={props.onClick}
          className={classes.orderButton}
        >
          <Avatar size={40} src={item.image} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text size="xs" color="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>{item.from}</td>

      <td>{item.destination}</td>

      <td>{item.vehicleType}</td>

      <td>
        {item.status === "Pengajuan" ? (
          <Badge>Konfirmasi admin</Badge>
        ) : (
          <Badge color="gray">Konfirmasi kustomer</Badge>
        )}
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Kustomer</th>
            <th>Asal</th>
            <th>Tujuan</th>
            <th>Kendaraan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default AdminOrderList;
